import resume from '../images/West_Resume.docx'

function Navbar(){
    function resumeClick(e){
        e.preventDefault()
        window.open(resume,'height=250,width=250');
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContend">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" arria-current="page" href="/#projects">Projects</a>
                    </li>      
                    <li className="nav-item">
                        <a className="nav-link" arria-current="page" href="/#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={resumeClick}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar