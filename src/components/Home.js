import{gitHub,linkedIn} from './svgs.js'
function Home(){
    return (
        <header className="jumbotron jumbotron-fluid home" id="home" >
        <div className="container-fluid text-center">
            <h1 className="display-3" >Full-Stack Developer</h1>
            <p className="lead" >Changing the world, a line of code at a time.</p>
            <a className="" href="https://github.com/TheTruth4418" target="_blank" rel="noopener noreferrer">{gitHub}</a>
            <a className="" href="https://www.linkedin.com/in/william-west-atx/" target="_blank" rel="noopener noreferrer">{linkedIn}</a>
        </div>
    </header>
    )
}

export default Home