import fgc from '../images/fgc.png'
import vk from '../images/Logo.png'

export const projectsObj = [
    {
        title: "FGC-Notebook",
        description: "FGC-Notebook is a handy notebook style application that allows players in the Fighting Game Community to keep track of things they learn and retrieve those on the go!",
        link: "https://fgc-notebook.netlify.app",
        repo: "https://github.com/TheTruth4418/fgc-notebook-api",
        image: <img src={fgc} id="FGC-Notebook" className="card-img-top mx-auto" alt=""/>
    },
    {
        title: "Visioned-Kreations",
        description:"Visioned Kreations is an E-commerce store that was created to make custom designs come to life! The store sells custom made Controllers, Cups, Shirts, and Shoes!.",
        link: "https://visioned-kreations.netlify.app",
        repo: "https://github.com/TheTruth4418/visioned-kreations",
        image: <img src={vk} id="Visioned-Kreations" className="card-img-top" alt=""/>
    }
]

export function displayInfo(e){
    let img = document.getElementById(e.target.id)
    img.innerText = "Hello"
}