// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/servers/db";
import { fetchProjectListings } from "@/servers/model/Project";



export default function handler(req, res) {
  try{
  await dbConnect();

  if(req.method === "GET"){
    const projectListing = await fetchProjectListings();
    console.log(projectListing)
    res.status(200).json({ projectListing });
    console.log("fetch was good");
   } else {
     res.status(404).json({error:"page not found"});
  } 
} 
}
