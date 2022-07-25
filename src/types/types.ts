export interface Service {
    id: number;
    img: string;
    title: string,
    label: string,
}

interface ProjectDetails {
    title: string;
    caption: string;
    description: string;
    problem: string;
    timeline: string;
    industry: string;
    goals: string;
    role1: string;
    role2: string;
    summary: string;
}

export interface Project {
    id: number;
    name: string;
    logo: string;
    bgColor: string;
    tools: string[];
    demo: string;
    link: string;
    repository: string;
    status: ProjectStatus;
    details: ProjectDetails;
}

export enum ProjectStatus {
    FINISHED = 'FINISHED',
    IN_PROGRESS = 'IN_PROGRESS'
}
