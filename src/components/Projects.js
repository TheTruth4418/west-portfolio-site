import { projectsObj } from "./projectsObj"

function Projects(){
    let projectsArr = projectsObj.map(project=> <li key={project.name}>{project.image}</li>)
    return (
        <div id="projects">
            <h1>Projects</h1>
            {projectsArr}
        </div>
    )
}

export default Projects