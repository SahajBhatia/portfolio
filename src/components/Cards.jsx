import { Link } from "react-router-dom";
import ProjectCardss from "./ProjectCardss.jsx";

const ProjectCards = [{
    title : "Music Player",
    description : "Personal Music PLayer made with ReactJs using hooks, have features like Playing song and also a search option.",
    img : "img/Screenshot (3).png",
    link : ""
},
{
    title : "Ip Address Finder",
    description : "Ip Address Finder made with ReactJs using hooks, have features like finding Ip address of user and their Ip location.",
    img : "img/Screenshot (4).png",
    link : "https://ipaddress33.netlify.app/"
}
]

const Project = ()=>{
    return(
        <div className="projectss ">
            {ProjectCards.map((v,i)=>{
                console.log(v);
                return <ProjectCardss key={i} data={v}/>
            })}
        </div>
    )
}
export default Project;