import { AboutType } from "../typedefinition";
import aboutInfo from "../fake_database/aboutText.json"
export const fetchAbout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
    console.log(aboutInfo);
    const data = await res.json();
    const about: AboutType[] = data.about;
    
    //console.log(about);
    return aboutInfo.about;
}