const Contact = require("../models/contact")
const express = require('express')

module.exports = {
    new : newContact,
    create,
    index,
    show,
    delete: deleteContact,
}



async function deleteContact (req,res) {
    const result1 = await Contact.deleteOne({_id : req.params.id})
    res.redirect('/contacts')
}


function newContact(req,res) {
    res.render('contacts/new', {errorMsg: ''})
}

async function create(req,res) {
    try {
        req.body.createdBy = req.user._id
        await Contact.create(req.body);
        res.redirect('/contacts')
    } catch (err){
        res.render('contacts/new', {errorMsg: err.message})
    }
}



async function index(req,res) {
    try{const contacts = await Contact.find({createdBy: req.user._id})
    console.log("req.user",  req.user._id)
    res.render('contacts/index', {title: 'All Contacts', contacts });
} catch (err){
    console.log(err)
}
}

async function show(req,res) {
    const contacts = await Contact.findById(req.params.id);
    res.render('contacts/show', { contact: contacts })
  }
