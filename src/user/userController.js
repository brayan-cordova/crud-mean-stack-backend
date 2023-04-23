const userService = require('./userService');

//get data
var getDataControllerFn = async (req, res) => {
    var employee = await userService.getDataFromDBService();
    res.send({
        "status": true,
        "data": employee
    });
}

//post data
var createUserControllerFn = async (req, res) => {

    var status = await userService.createUserDBService(req.body);

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

module.exports = {
    getDataControllerFn,
    createUserControllerFn
};