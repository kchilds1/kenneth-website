//import nodemailer to be able to email from website
import nodemailer from "nodemailer";

//import email address and password from .env file
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

//Creating a transport option.  I'm using my gmail account and adding my authentication
export const transporter = nodemailer.createTransport ({
  service:"gmail",
  auth:{
    user: email,
    pass,
  },

});

//emailing to myself and looking at contact info to know who emailed me
export const mailOptions = {
    from: email,
    to: email,

}