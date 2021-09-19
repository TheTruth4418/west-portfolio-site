import { projectsObj } from "./projectsObj"

function Projects(){
    let projectsArr = projectsObj.map(project=> 
        <>
            <div className="project-details" key={project.name}>
                <li>{project.image}</li>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">Live app</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </>
    )
    return (
        <>
            <h1>Projects</h1>
            <div id="projects">
                {projectsArr}
            </div>
        </>
    )
}

export default Projects