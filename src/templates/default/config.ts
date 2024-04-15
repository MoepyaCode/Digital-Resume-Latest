/**
 * Navigation links
 */
export enum Navigate {
    HOME = 'default-home',
    ABOUT = 'default-about',
    EXPERIENCE = 'default-experience',
    PROJECTS = 'default-projects',
    CONTACT = 'default-contact',
}


const UserData = {
    name: 'Kagiso Moepya',
    email: 'kagisomoepya19@gmail.com',
    socials: {
        linkedIn: 'https://www.linkedin.com/in/emmanuel-moepya-87818015a/',
    },
    version_controllers: {
        github: 'https://github.com/MoepyaCode'
    },
    resume: '/documents/Resume-Kagiso-Moepya.pdf',
    images: {
        image_1: '/images/home/image-1.jpg',
        image_2: '/images/about/image-1.jpeg',
    },
    workType: 'FullStack Developer',
    development: {
        frontend: {
            field: 'Frontend Development',
            years: '1+ years',
            skills: [
                { skill: 'React', experienceLevel: 'Intermediate' },
                { skill: 'HTML', experienceLevel: 'Advanced' },
                { skill: 'CSS', experienceLevel: 'Advanced' },
                { skill: 'JavaScript', experienceLevel: 'Advanced' },
                { skill: 'TypeScript', experienceLevel: 'Intermediate' },
            ]
        },
        backend: {
            field: 'Backend Development',
            years: '1+ years',
            skills: [
                { skill: 'Node.js', experienceLevel: 'Intermediate' },
                { skill: 'Express', experienceLevel: 'Intermediate' },
                { skill: 'Java', experienceLevel: 'Intermediate' },
                { skill: 'Python', experienceLevel: 'Intermediate' },
            ]
        },
        cloud: {
            field: 'Cloud Development',
            years: '1+ years',
            skills: [
                { skill: 'AWS', experienceLevel: 'Beginner' },
            ]
        },
    },
    projects : [
        {
            title: 'DNA Extraction',
            image: '/images/projects/dna-extraction.png',
            github: null,
            liveDemo: 'https://content.learningsandbox.com/the-jackson-laboratory/simulations/dna-extraction-sim/',
        },
        {
            title: 'Digital Resume Creator',
            image: '/images/projects/resume-creator.jpg',
            github: 'https://github.com/MoepyaCode/Resume-Creator',
            liveDemo: 'https://kem-digital-resume.netlify.app/',
        },
    ]
}

export const HomeData = {
    greeting: "Hello I'm",
    name: UserData.name,
    workType: UserData.workType,
    image: UserData.images.image_1,
    links: {
        linkedIn: UserData.socials.linkedIn,
        github: UserData.version_controllers.github,
        resume: UserData.resume,
    }
}

export const AboutData = {
    heading: 'About Me',
    subText: "Get to know me",
    about: "I'm currently working as a FullStack Developer at Learning Sandbox, with over a year of experience in both backend and frontend development. I'm passionate about learning and always eager to enhance my skills.",
    image: UserData.images.image_2,
    bannerDetails: [
        {
            title: 'Experience',
            details: {
                years: UserData.development.frontend.years,
                field: UserData.development.frontend.field,
            }
        },
        {
            title: 'Experience',
            details: {
                years: UserData.development.backend.years,
                field: UserData.development.backend.field,
            }
        }
    ]
}

export const ExperienceData = {
    heading: 'Experience',
    subText: 'My Work Experience',
    fields: [
        {
            type: UserData.development.frontend.field,
            skills: UserData.development.frontend.skills,
        },
        {
            type: UserData.development.backend.field,
            skills: UserData.development.backend.skills,
        },
        {
            type: UserData.development.cloud.field,
            skills: UserData.development.cloud.skills,
        }
    ]
}

export const ProjectsData = {
    heading: 'Projects',
    subText: 'My Projects',
    projects: UserData.projects,
}

export const ContactData = {
    heading: 'Contact',
    subText: 'Get in touch',
    email: UserData.email,
    socials: {
        linkedIn: UserData.socials.linkedIn,
    }
}