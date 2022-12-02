import { EducationType } from "../typedefinition";

export const fetchEducation = async () => {
    const res = await fetch(`https://s8bsauug.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22education%22%5D`);

    const data = await res.json();
    const education: EducationType[] = data.education;
    
    console.log(education);
    return education;
}