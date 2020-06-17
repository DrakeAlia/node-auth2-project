const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');

module,exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secrets = secrets.jwtSecret;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: 'cannot pass' })
            } else {
                req.decodedToken = decodedToken;

                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Please provide credentials' })
        console.log(token);
        console.log(req.headers)
    }
};