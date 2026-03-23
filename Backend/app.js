const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cors=require('cors')
const employeesRout=require('./routes/employees/router.employees')
const app = express();
const db=require('./db');
const cookie=require('cookie-parser')
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Use Google's DNS

 db()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
  origin: "http://localhost:5173", // ❌ NOT "*" - Must be your exact React URL
  credentials: true,               // ✅ Allow cookies/headers
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookie()) 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', employeesRout);
// app.use('/pr',require("./routes/product/main") );

app.use("/products", require("./routes/product/product"));
app.use("/cart", require("./routes/product/crd"));
app.use("/orders", require("./routes/product/oder"));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
