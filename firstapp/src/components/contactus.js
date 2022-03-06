import './contact.css' ; 
 const Contactus =() => {
    return (
      <div class="container">  

      <form id="contact" action="" method="post">
        
        <h2><b>Contact us </b></h2>
        <fieldset>
          <input placeholder="Name" type="text" tabindex="1" required autofocus></input>
        </fieldset>
        <fieldset>
          <input placeholder=" Email Address" type="email" tabindex="2" required></input>
        </fieldset>
        <fieldset>
          <input placeholder=" Phone Number " type="tel" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        
      </form>
      </div>
        
        
        
)
};
    


export default Contactus;