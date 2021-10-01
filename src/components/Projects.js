import { projectsObj } from "./projectsObj"

function Projects(){
    let projectsArr = projectsObj.map(project=> 
        <div className="row justify-content-center p-4" key={project.title}>
            <div className="card text-center">
                {project.image}
                    <div className="card-body">
                        <h2 className="card-title">{project.title}</h2><br/>
                        <p className="card-text">{project.description}</p>
                            <a href={project.link} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Site</a>
                            <a href={project.repo} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
            </div>
        </div>
    )
    return (
        <div className="container-fluid" id="projects">
            <h1 className="text-center">Projects</h1>
            {projectsArr}
        </div>
    )
}

export default Projects