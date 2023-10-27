import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
    company: {
      type: String,
    },
    contactName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
});

const contactsModel = mongoose.models.contacts || 
mongoose.model('contacts',contactsSchema, 'contactsData')