import { projectsObj } from "./projectsObj"

function Projects(){
    let projectsArr = projectsObj.map(project=> 
        <>
            <div className="project-card" key={project.name}>
                <li>{project.image}</li>
                <div className="project-details">
                    <div className="details-links">
                        <p>{project.description}</p>
                        <li><a href={project.link} target="_blank" rel="noopener noreferrer">Live app</a></li>
                        <li><a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
                    </div>
                </div>
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