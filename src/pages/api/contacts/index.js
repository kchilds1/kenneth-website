import dbConnect from "@/server/db";
import { createContact } from "@/server/companies";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "POST") {
      const reqPayload = req.body;
      console.log("Req Payload:", reqPayload);

      const newContact = await createJob(reqPayload);

      console.log("New Contact", newContact);

      res
        .status(201)
        .json({
          message: "New contact created successfully.",
          job: newContact,
        });
    } else {
      return res.status(500).json({ msg: "this needs to be a POST request" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
