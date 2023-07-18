const Contact = require('../models/contact')

module.exports = {
    create,
}

async function create(req,res) {
    const contact = await Contact.findById(req.params.id);
    console.log(contact)
    contact.work.push(req.body)
    try{
        await contact.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/contacts/${contact._id}`)
}