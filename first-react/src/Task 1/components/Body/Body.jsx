import "./Body.css"



const Body =
<div className="contactus -container">
    <div className="text">
        <h2>
            Have a Question ?
            Get in touch with us
        </h2>
        <p>
            Fill up the Form and
            ou team will get back
            to within 24 hrs
        </p>
        <label htmlFor="name"></label><br/>
        <input className="name" type="text" name="name" id="name" placeholder="Name"/><br/>
        <label htmlFor="email"></label><br/>
        <input className="email" type="email" name="email" id="email" placeholder="Email"/><br/>
        <textarea className="message" name="message" id="message" placeholder="message"></textarea><br/>
        <button className="button">Send Message &rarr</button>
        <div className="photo">
            <div className="left-photo">
                <img src="#" alt="left photo" />
            </div>
            <div className="right-photo">
                <img src="#" alt="right photo" />
            </div>
        </div>
    </div>
</div>

export default Body