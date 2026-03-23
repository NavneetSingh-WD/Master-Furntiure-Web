const { token } = require('morgan');
const service = require('./service.employees');
require('dotenv').config();
// REGISTER
exports.register = (req, res) => {
    console.log(req.body);

    service.registerUser(req.body, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        res.cookie('token', result.token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });
        res.json({ message: 'Employee registered', token: result.token });
        // res.redirect('/home');
    });
};

// LOGIN
exports.login = (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    service.loginUser(email, password, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json(err);
        }

        if (result.status !== 200) {
            return res.status(result.status).json({ message: result.message });
        }
        console.log(result)
        res.cookie('token', result.token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });
        console.log(result)

        res.json({ token: result, result: result });
        // res.redirect('/home');
    });
};

// CHANGE PASSWORD
exports.changePassword = (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;

    service.changeUserPassword(userId, oldPassword, newPassword, (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(result.status).json({ message: result.message });
    });
};

// get user
exports.getUserr = (req, res) => {
    const user = req.user;
    console.log(user)
    service.getUser(user, (err, result) => {
        try {
            if (err) return res.status(500).json(err);
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    })
}