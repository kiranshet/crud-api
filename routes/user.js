const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

// let obj = {
//     name:"kiran",
//     age:"28",
//     skill:["javascript", "nodejs"] 
// }

// router.get('/users', (req,res,next) => {
//  return res.status(200).json(obj);
// });

router.get('/users', user_controller.get_all_user);

router.get('/users/:userId', user_controller.get_userby_userid);

router.post('/users', user_controller.create_user);

router.put('/users/:userId', user_controller.update_user_userid);

router.delete('/users/:userId', user_controller.delete_user_userid);;


module.exports = router;