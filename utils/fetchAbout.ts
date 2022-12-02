import { AboutType } from "../typedefinition";

export const fetchAbout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
    console.log(res);
    const data = await res.json();
    const about: AboutType[] = data.about;
    
    console.log(about);
    return about;
}