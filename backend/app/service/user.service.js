/**
 * to perform user operations
 * @file:user.service.js
 * @author:Shravya p
 * @version:1.0
 * @since:7/12/2021
 */
const {
    loginUser,
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteById,
    forgotPassword,
    resetPassword

} = require('../models/user.model');
const mailHelper = require("../../utils/mailer")
const jwtHelper = require('../../utils/jwt');
const bcrypt = require('bcrypt');
/**
   * @description Service layer function for user registeration
   * @param {Object} userDetails
   */
const createNewUser = (userDetails) => {
    return createUser(userDetails)
}
  /**
   * @description Service layer function for user login
   * @param {Object} userDetails
   */
const login = (userDetails) => {
    return loginUser(userDetails).then((data) => {
        if (bcrypt.compareSync(userDetails.password, data.password)) {
            var token = jwtHelper.generateAccessToken(data._id);
            return token
        } else {
            throw new Error("Password is incorrect")
        }
    }).catch((error) => {
        throw error
    })
}
 /**
   * @description Service layer function for finding all user
   */
const getUsers = () => {
    return findAllUsers()
}
 /**
   * @description Service layer function for finding particular user using email
   * @param {string} findId
   */
const getUser = (findId) => {
    return findUser(findId)
}
 /**
   *@description Service layer function for updating user details
   * @param {Object} findId
   * @param {Object} userDetails
   */
const updateUsers = (findId, userDetails) => {
    return updateUser(findId, userDetails)
}
  /**
   *@description Service layer function for deleting a user
   * @param {Object} findId
   */
const deleteUsers = (findId) => {
    return deleteById(findId)
}
 /**
   * @description Service layer function for user forgot password
   * @param {string} email
   * @returns
   */
forgot = (email) => {
    return forgotPassword(email).then((data) => {
        return mailHelper.mailer(data.email, data.resetPasswordToken).then((data) => {
            return data;
        }).catch((err) => {
            throw err;
        });
    }).catch((err) => {
        throw err;
    });
};
/**
   * @description Service layer function for user reset password
   * @param {string} token
   * @param {string} password
   * @returns
   */
reset = (token, password) => {
    return resetPassword(token, password).then(data => {
        return data;
    }).catch(err => {
        throw err;
    })
}


module.exports = {
    login,
    createNewUser,
    getUsers,
    getUser,
    updateUsers,
    deleteUsers,
    forgot,
    reset
}
