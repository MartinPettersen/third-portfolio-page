import { ProjectType } from "../typedefinition";

export const fetchProject = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);

    const data = await res.json();
    const project: ProjectType[] = data.project;
    
    console.log(project);
    return project;
}