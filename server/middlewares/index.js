const expressJwt = require("express-jwt");

exports.requireSignin = expressJwt({
    getToken: () => require.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS265"],
}); // req.user._id controleert of jwt token overeen komt met?? ja de jwt token in de backend??