const express = require('express');
const router = express.Router();
const inscriptionControllers = require('../controllers/Dinscription-controllers')
const {check}=require('express-validator')

router.post('/',
[
    check('nom')
    .not()
    .isEmpty(),
    check('prenom')
    .not()
    .isEmpty(),
    check('email')
    .not()
    .isEmpty(),
    check('tel')
    .not()
    .isEmpty(),
    check('programme')
    .not()
    .isEmpty(),
    check('site')
    .not()
    .isEmpty()

]
,inscriptionControllers.addInscription);

module.exports=router