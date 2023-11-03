import dbConnect from "@/server/db";
import { createContact } from "@/server/contacts";
import { transporter, mailOptions } from "@/config/nodemailer";
import styles from "@/styles/Home.module.css";

const ContactMessageFields = {
  contactName: "Name",
  company: "Company",
  email: "Email",
  message: "Message",
  phoneNumber: "Phone Number",
  question: "Question",
};

export default async function handler(req, res) {
  try {
    await dbConnect();

    const generateEmail = (reqPayload) => {
      const stringData = Object.entries(reqPayload).reduce(
        (str, [key, val]) =>
          (str += `${ContactMessageFields[key]}: \n${val} \n \n`),
        ""
      );
      console.log("array with the key and input", stringData);

      const htmlData = Object.entries(reqPayload).reduce(
        (str, [key, val]) =>
          (str += `<h1 class="${styles.formHeading}" align="left">${ContactMessageFields[key]}</h1><p align="left">${val}</p>`),
        ""
      );
      return {
        text: stringData,
        html: `<!doctype html>
        <html>
        <head>
        <title>Kenneth-Website email</title>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width,initial-scale=1">
        <meta http-equiv=X-UA-Compatible content="IE=edge">
        <style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style>
        </head>
        <body style=margin:0!important;padding:0!important;background:#fff>
        <div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div>
        <table border=0 cellpadding=0 cellspacing=0 width=100%>
        <tr>
        <td bgcolor=#ffffff align=center style="padding:10px 15px 30px 15px" class=section-padding>
        <table border=0 cellpadding=0 cellspacing=0 width=100% style=max-width:500px class=responsive-table>
        <tr>
        <td>
        <table width=100% border=0 cellspacing=0 cellpadding=0>
        <tr>
        <td>
        <table width=100% border=0 cellspacing=0 cellpadding=0>
        <tr>
        <td style=padding:0;font-size:16px;line-height:25px;color:#232323 class="padding message-content">
        <h2>New Contact Message</h2>
        <div class=form-container>${htmlData}</div>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </td>
        </tr>
        </table>
        </body>
        </html>`,
      };
    };

    if (req.method === "POST") {
      const reqPayload = req.body;
      console.log("Req Payload:", reqPayload);

      const newContact = await createContact(reqPayload);

      console.log("New Contact", newContact);

      try {
        await transporter.sendMail({
          ...mailOptions,
          ...generateEmail(reqPayload),
          subject: reqPayload.contactName,
        });
        return res.status(200).json({ success: true });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
    } else {
      return res.status(500).json({ msg: "This needs to be a POST request" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
