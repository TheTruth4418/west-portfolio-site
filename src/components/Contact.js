function Contact(){
    return (
        <div id="contact">
            <h2>Contact</h2>
            <form>
                <label>Name:</label>
                <input type="text"/>
                <br/>

                <label>Email:</label>
                <input type="text"/>
                <br/>

                <label>Message:</label>
                <textarea name="message" rows="4" cols="50"/>
                <br/>
            </form>
        </div>
    )
}

export default Contact