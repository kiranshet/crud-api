const mongoose = require('mongoose');

const User = require('../models/user');

exports.get_all_user = (req, res, next) =>{

    User.find()
    .exec()
    .then(result=>{
    console.log(result);
    res.status(200).json(result);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    });
}

exports.get_userby_userid = (req, res, next) =>{
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(result=>{
     console.log(result);
     if(result) {
       res.status(200).json(result);
     }else{
       res.status(404).json({message: 'No valid entry for provided Id'});
     }
   })
    .catch(err=>{
     console.log(err);
    res.status(500).json({error:err});
   }); 
}

exports.create_user = (req, res, next) =>{
     const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    age: req.body.age,
    hobbies: req.body.hobbies
    })

    user.save()
    .then(result => {
    console.log(result);
    res.status(201).json({message: 'User Created'});
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({
    error: err
    });
    });

}

exports.update_user_userid = (req, res, next) =>{
    const id = req.params.userId; 
    User.updateOne(
        {_id:id},
        {
            $set: {
            username: req.body.username,
            age: req.body.age,
            hobbies: req.body.hobbies 
            },
        })
    .exec()
    .then(result => {
     console.log(result);
     res.status(200).json(result);
    })
    .catch(err=> {
     console.log(err);
     res.status(500).json({error:err})
    });
}

exports.delete_user_userid = (req, res, next) =>{
    const id = req.params.userId;  
    User.deleteOne({_id:id})
    .exec()
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
     }) 
}