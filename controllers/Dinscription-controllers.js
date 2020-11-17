const httpError = require('../models/http-error');
const mongoose = require('mongoose');
const uuid = require('uuid/v4')

const { validationResult } = require('express-validator');

const Dinscription = require('../models/Dinscription')

const addInscription = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return next(new httpError('invalid input passed ', 422));

    }
    const { nom, prenom, email, tel, programme, site } = req.body;

    const createdInscription = new Dinscription({
        nom,
        prenom,
        email,
        tel,
        programme,
        site,
        treated:false
    })

    try {
        
        await createdInscription.save();
        
    } catch (err) {
        const error = new httpError('failed', 500);
        return next(error);
    }


    res.status(201).json({ Inscription: createdInscription , message:'Votre demande est enregistrer, vous serez contacter.'})


}

exports.addInscription=addInscription