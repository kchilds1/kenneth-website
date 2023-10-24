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
});

const ProjectModel = mongoose.models.project || 
mongoose.model('project',projectSchema, 'projects_data')

export async function fetchProjectListings(){
    try{
        const projectListings = await ProjectModel.find();
        return projectListings;
    }catch (error){
        throw new Error("Error fetching project listings: " + error.message);
    }
}