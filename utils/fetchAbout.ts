import { AboutType } from "../typedefinition";

export const fetchAbout = async () => {
    const res = await fetch(`https://s8bsauug.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22about%22%5D`);



    
    const data = await res.json();
    const about: AboutType[] = data.about;
    
    console.log(about);
    return about;
}