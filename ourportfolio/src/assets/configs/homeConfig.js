import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hello! We are <strong className="main-name"> students of IITU</strong>
        </h1>,
    titles: [
        "ORYNBAI ERKANAT",
        "Bolatkyzy Dilnaz",
        "Bauyrzhanuly Spartak"
    ],
    about: {
        start: "Team №45",
        exit: "«Development of an Automated Information Security Process Based on the DevSecOps Approach in a Containerized Environment»" + 
        "Research Advisor: Senior-lecturer Ongenbayeva Zhadyra Zhumabekovna"
    },
    workTimeline: [
    {
        id: "phase-1",
        title: "Starting the Research",
        company: "October 2024",
        description: "Getting our topic approved, exploring DevSecOps, and collecting resources to understand the basics and set a clear direction.",
        date: "Oct 2024",
        icon: <BsClipboardData />,
        tags: ["planning", "research", "devsecops"]
    },
    {
        id: "phase-2",
        title: "Choosing Tools & Planning Architecture",
        company: "November 2024",
        description: "Analyzing different tools and starting to plan how our secure CI/CD pipeline will work, step by step.",
        date: "Nov 2024",
        icon: <DiCodeigniter />,
        tags: ["design", "tools", "strategy"]
    },
    {
        id: "phase-3",
        title: "Building the Core Pipeline",
        company: "Dec 2024 – Jan 2025",
        description: "Setting up the basic pipeline using GitHub Actions, Docker, and other tools, and making the whole flow actually work.",
        date: "Dec 2024 – Jan 2025",
        icon: <FaMobileAlt />,
        tags: ["ci/cd", "docker", "integration"]
    },
    {
        id: "phase-4",
        title: "Adding Security & Testing",
        company: "Feb – Mar 2025",
        description: "Integrating security tools like scanners, improving what we built, and testing everything to find and fix issues.",
        date: "Feb – Mar 2025",
        icon: <GiCommercialAirplane />,
        tags: ["security", "testing", "debugging"]
    },
    {
        id: "phase-5",
        title: "Writing, Finalizing, Practicing",
        company: "Apr – May 2025",
        description: "Documenting the project, preparing the report, and practicing our presentation with feedback from our Senior Lecturer.",
        date: "Apr – May 2025",
        icon: <BiRocket />,
        tags: ["writing", "prep", "finalizing"]
    },
    {
        id: "phase-6",
        title: "Defending the Diploma",
        company: "June 2025",
        description: "Presenting our DevSecOps project, answering questions, and finishing what we started with confidence.",
        date: "June 2025",
        icon: <BiRocket />,
        tags: ["defense", "presentation", "diploma"]
    }
]

}


export default homeConfig