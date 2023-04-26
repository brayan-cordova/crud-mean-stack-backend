const userService = require('./userService');

//get user data
const getDataControllerFn = async (req, res) => {

    const employee = await userService.getDataFromDBService();

    res.send({
        "status": true,
        "data": employee
    });
}

//post user data
const createUserControllerFn = async (req, res) => {

    const status = await userService.createUserDBService(req.body);

    if (status) {
        res.send({
            "status": true,
            "message": "User Created Successfully"
        });
    } else {
        res.send({
            "status": false,
            "message": "An Error Ocurred Creating The User "
        });
    }
}

///update user data
const updateUserController = async (req, res) => {

    console.log(req.params.id);
    console.log(req.body);

    const result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
        res.send({
            "status": true,
            "message": "User Have Been Updated"
        });
    } else {
        res.send({
            "status": false,
            "message": "User Updated Failed"
        });
    }
}

//delete user data
const deleteUserController = async (req, res) => {

    console.log(req.params.id);

    const result = await userService.removeUserDBService(req.params.id);

    if (result) {
        res.send({
            "status": true,
            "message": "User Have Been Deleted"
        });
    } else {
        res.send({
            "status": false,
            "message": "User Deleted Failed"
        });
    }
}

module.exports = {
    getDataControllerFn,
    createUserControllerFn,
    updateUserController,
    deleteUserController
};