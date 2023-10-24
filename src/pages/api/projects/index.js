// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/server/db";
import { fetchProjectListings } from "@/server/Project";



export default async function handler(req, res) {
  try{
  await dbConnect();

  if(req.method === "GET"){
    const projectListing = await fetchProjectListings();
    res.status(200).json({ projectListing });
    console.log("fetch was good");
   } else {
     res.status(404).json({error:"page not found"});
  } 
} catch (error){
  console.log("Error:", error);
  res.status(500).json({ error: "Internal Server Error" });
 }
}
