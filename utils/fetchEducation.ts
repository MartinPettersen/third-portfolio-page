import { EducationType } from "../typedefinition";
export const fetchEducation = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`);

    const data = await res.json();
    const education: EducationType[] = data.education;
    
    // console.log(education);
    return education;
}