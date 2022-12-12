import { AboutType } from "../typedefinition";
export const fetchAbout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
    const data = await res.json();
    console.log("aboutInfo " + typeof(data));

    const about: AboutType[] = data.about;
    
    //console.log(about);
    return about;
}