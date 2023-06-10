const Users = require("../models/bookingModel");

exports.getUsers = (req, res) => {
  Users.findAll()
    .then((users) => {
      const resData = [];  
      for(let i of users){
        resData.push(i.dataValues)
      }
      res.json(resData);
    })
    .catch((err) => console.log(err));
};

exports.postUser = (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userMobileNo = req.body.mobNum;

  Users.create({
    userName,
    userEmail,
    userMobileNo,
  })
    .then((result) => res.json(result.dataValues))
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res) => {
   Users.destroy({where: {id: req.params.id}})
   .then(() => res.sendStatus('202'))
   .catch(err => console.log(err));
}
