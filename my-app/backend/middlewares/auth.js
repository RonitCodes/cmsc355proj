const jwt = require(`jsonwebtoken`);

exports.verifyToken = (req, res, next) => {
    let accessToken = req.cookies.jwt;

    // if no token in cookies, request unauthorized
    if (!accessToken) {
        return res.status(403).json({
            error: "Unauthorized"
        });
    }

    let payload;
    try {
        // verify the token using jwt.verify
        // throws error if token is expired
        payload = jwt.verify(accessToken, process.env.JWT_SECRET);
        req._id = payload._id;

        next();
    } catch (e) {
        // return unauthorized error
        return res.status(403).json({
            error: "Unauthorized" 
        });
    }
};