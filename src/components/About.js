import resume from '../images/West_Resume.docx'
function About(){
    function resumeClick(e){
        e.preventDefault()
        window.open(resume,'height=250,width=250');
    }
    return (
        <div>
            <h1>Single Page Specialist</h1>
            <p>Texas based programmer who specializes in ReactJs, JavaScript, and React Looking to change the world one line of code at a time!</p>
            <a href="https://github.com/TheTruth4418" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/william-west-atx/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/" onClick={resumeClick}>Resume</a>
        </div>
    )
}

export default About