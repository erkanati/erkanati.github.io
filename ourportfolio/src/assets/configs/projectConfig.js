import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import devsecops from "../images/DevSecOps_Pipeline.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "Diploma Project itself",
        links: [
            {
                name: "repo",
                url: "https://gitlab.com/erkanati/our-project",
                icon: <AiFillGithub/>,
            },
            {
                name: "subscription",
                url: "",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://",
                icon: <ImBook/>,
            }
        ],
        image: devsecops,
        description: "Our good project where we made a pretty good team work. All the DevOps process requires from employees to be a team. However we are we already underwent through it at university doing technical development together.",
        target: "_blank"
    }
]

export default projectConfig