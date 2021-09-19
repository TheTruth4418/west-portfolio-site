import fgc from '../images/fgc.png'
import vk from '../images/Logo.png'

export const projectsObj = [
    {
        title: "FGC-Notebook",
        description: "Handy notebook app to track all your fighting game knowledge!",
        link: "https://fgc-notebook.netlify.app",
        repo: "https://github.com/TheTruth4418/fgc-notebook-api",
        image: <img src={fgc} id="FGC-Notebook" onMouseOver={displayInfo} alt=""/>
    },
    {
        title: "Visioned-Kreations",
        description: "E-commerce store for custom Controllers, Cups, Shirts, and Shoes.",
        link: "https://visioned-kreations.netlify.app",
        repo: "https://github.com/TheTruth4418/visioned-kreations",
        image: <img src={vk} id="Visioned-Kreations" onMouseOver={displayInfo} alt=""/>
    }
]

export function displayInfo(e){
    let img = document.getElementById(e.target.id)
    img.innerText = "Hello"
}