import { projectsObj } from "./projectsObj"

function Projects(){
    let projectsArr = projectsObj.map(project=> 
        <div className="row justify-content-center">
            <div className="card text-center" key={project.name}>
                <h2 className="card-title">{project.title}</h2>
                {project.image}
                    <div className="card-body">
                        <p className="card-body">{project.description}</p>
                        <a href={project.link} classname="card-text" target="_blank" rel="noopener noreferrer">Live app</a>
                        <a href={project.repo} className="card-text" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
            </div>
        </div>
    )
    return (
        <div className="container-fluid">
            <h1>Projects</h1>
            {projectsArr}
        </div>
    )
}

export default Projects