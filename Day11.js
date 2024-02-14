const jwt = require('jsonwebtoken');

// Secret key used to sign JWTs
const secretKey = 'your_secret_key_here';

// Middleware function to authenticate JWT
const authenticateJWT = (req, res, next) => {
    // Extract JWT from Authorization header
    const authHeader = req.headers.authorization;

    if (authHeader) {
        // Extract JWT from Authorization header (Bearer <token>)
        const token = authHeader.split(' ')[1];

        // Verify JWT
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                // JWT verification failed
                return res.sendStatus(401); // Unauthorized
            }

            // JWT verified successfully, attach user to request object
            req.user = user;
            next(); // Proceed to the next middleware
        });
    } else {
        // Authorization header not provided
        res.sendStatus(401); // Unauthorized
    }
};

module.exports = authenticateJWT;
