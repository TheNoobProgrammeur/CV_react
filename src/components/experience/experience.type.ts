type IconsType = {
    name: string;
    icon: JSX.Element;
}

export type ExperienceType = {
    titre: string;
    company: string;
    description: string[];
    date: string;
    icons: IconsType[][];
}
