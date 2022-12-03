import { ProjectType } from "../typedefinition";
import projectInfo from "../fake_database/projectText.json"
export const fetchProject = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);
   
    const data = await res.json();
    const project: ProjectType[] = data.project;
    
    console.log(project);
    return projectInfo.project;
}