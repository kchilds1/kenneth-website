import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
      type: String,
    },
    codeLink: {
        type: String,
    },
    projectLink: {
        type: String,
    },
    img: {
        type: String,
    },
});

const ProjectModel = mongoose.models.project || 
mongoose.model('project',projectSchema, 'projectsData')

export async function fetchProjectListings(){
    try{
        const projectListings = await ProjectModel.find();
        return projectListings;
    }catch (error){
        throw new Error("Error fetching project listings: " + error.message);
    }
}