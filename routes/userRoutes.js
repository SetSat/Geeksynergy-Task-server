const express = require('express');
const { signup, login, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', getUsers);
router.put('/update', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
