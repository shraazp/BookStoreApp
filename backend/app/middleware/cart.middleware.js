const jwtHelper = require('../../utils/jwt');

const logger = require('../../utils/logger.js');
/**
 * to ensure if the token is decoded properly or not
 * @param {object} req 
 * @param {object} res 
 * @param {next} next 
 */
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwtHelper.verifyToken(token, (err, user) => {
            if (err) {
                logger.error(err)
                return res.send(err);
            }
            req.body.userId = user._id;

            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenticateJWT
}
