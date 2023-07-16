const Contact = require("../models/contact")
const express = require('express')

module.exports = {
    new : newContact,
    create,
    index,
}

function newContact(req,res) {
    res.render('contacts/new', {errorMsg: ''})
}

async function create(req,res) {
    try {
        await Contact.create(req.body);
        res.redirect('/contacts')
    } catch (err){
        res.render('contacts/new', {errorMsg: err.message})
    }
}

async function index(req,res) {
    const contacts = await Contact.find({})
    res.render('contacts/index', {title: 'All Contacts', contacts })
}

