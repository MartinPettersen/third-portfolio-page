interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface AboutType extends SanityBody{
    _type: "about";
    aboutInfo: string;
    name: string;
}


export interface EducationType extends SanityBody{
    _type: "education";
    firstBach: string;
    firstBachInfo: string;
    name: string;
    secondBach: string;
    secondBachInfo: string;
}

export interface ProjectType extends SanityBody{
    _type: "project";
    name: string;
    image: Image;
    projectInfo: string;
    githubLinks: string[];
    hostLinks: string[];
    tech: string[];
}



