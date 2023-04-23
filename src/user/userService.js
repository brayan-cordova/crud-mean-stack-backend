const userModel = require('./userModel');

//get data
module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {

        //function to find All data
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

//create data
module.exports.createUserDBService = (userDetails) => {

    return new Promise(function createUser(resolve, reject) {

        const userModelData = new userModel();

        userModelData.first_name = userDetails.first_name;
        userModelData.last_name = userDetails.last_name;
        userModelData.address_name = userDetails.address_name;
        userModelData.phone_name = userDetails.phone_name;

        //function to save data
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false)
            } else {
                resolve(true);
            }
        })
    })
}