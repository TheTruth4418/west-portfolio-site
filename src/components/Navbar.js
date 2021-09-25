import resume from '../images/West_Resume.docx'

function Navbar(){
    function resumeClick(e){
        e.preventDefault()
        window.open(resume,'height=250,width=250');
    }
    return (
        <nav className="nav bg-dark">
           <li className="nav-item">
               <a className="nav-link" href="/#projects">Projects</a>
            </li>
           <li className="nav-item">
               <a className="nav-link" href="/#skills">Skills</a>
            </li>
           <li className="nav-item">
               <a className="nav-link" href="/#contact">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" onClick={resumeClick}>Resume</a>
            </li>
        </nav>
    )
}

export default Navbar