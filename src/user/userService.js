const userModel = require('./userModel');

//get user data
module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {

        //function to find All user data
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

//create user data
module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {

        const userModelData = new userModel();

        userModelData.first_name = userDetails.first_name;
        userModelData.last_name = userDetails.last_name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        //function to save user data
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false)
            } else {
                resolve(true);
            }
        });
    });
}

//update user data
module.exports.updateUserDBService = (id, userDetails) => {

    console.log(userDetails);

    return new Promise(function myFn(resolve, reject) {

        //function to find by id and update user data
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {

            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

//delete user data
module.exports.removeUserDBService = (id) => {

    return new Promise(function myFn(resolve, reject) {

        //function to find by id and delete user data
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}