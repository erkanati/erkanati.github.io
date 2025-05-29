import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import { FaUsers } from "react-icons/fa";

const blogConfig = [
    {
        id: "blog-3",
        title: "Erkanat – Team Lead & Backend Developer",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/erkanat",
                icon: <FaUsers />
            }
        ],
        image: "https://via.placeholder.com/700x400?text=Erkanat",
        description: "Erkanat leads the team with deep backend expertise and DevSecOps knowledge, ensuring the team delivers robust and secure solutions.",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Dilnaz – Frontend Developer & UI/UX Specialist",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/dilnaz",
                icon: <FaUsers />
            }
        ],
        image: "https://via.placeholder.com/700x400?text=Dilnaz",
        description: "Dilnaz designs seamless user experiences and builds responsive frontends with React, CSS, and JavaScript.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "Spartak – DevSecOps Engineer & Infrastructure Expert",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/spartak",
                icon: <FaUsers />
            }
        ],
        image: "https://via.placeholder.com/700x400?text=Spartak",
        description: "Spartak ensures secure, efficient, and scalable infrastructure using Docker, Terraform, and modern DevOps practices.",
        target: "_blank"
    }
]

export default blogConfig