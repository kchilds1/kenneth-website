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

//This is for creating contact listing in MongoDB
export async function createContact(data) {
    try {
      const newContact = new contactsModel(data);
      const savedContact = await newContact.save();
      return savedContact;
    } catch (error) {
      throw new Error('Error creating contact: ' + error.message);
    }
 }