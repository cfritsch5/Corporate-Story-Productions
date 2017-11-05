import React from 'react';

class ContactContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form: true,
      name: "",
      subject: "",
      email: "",
      message: ""
    };

    this.displayform =  this.displayform.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(e){
  this.setState({
    form: !this.state.form,
    name: "",
    subject: "",
    email: "",
    message: ""
  });
  this.form.submit();
}

  displayform(){
    if(this.state.form){
      return (
        <form
          ref={form => (this.form = form)}
          action="http://www.corporatestoryproductions.com/contactform.php"
          method="post"
          target="dummyframe">
        <div className="contact-form">
          <label className="form-item">
            <input placeholder="Name"
              value={this.state.name}
              onChange={this.update('name')}
              type="text" id="name" name="name"/>
          </label>
          <label className="form-item">
            <input placeholder="Email Address"
              value={this.state.email}
              onChange={this.update('email')}
              type="text" id="email" name="email"/>
          </label>
          <label id="subject" className="form-item">
            <input placeholder="Subject"
              value={this.state.subject}
              onChange={this.update('subject')}
              type="text" id="subject" name="subject"/>
          </label>
          <label id="message" className="form-item">
             <textarea placeholder="Message"
               value={this.state.message}
               onChange={this.update('message')}
               id="message" name="message"></textarea>
          </label>
          <input
            onClick={this.handleSubmit}
            className="form-item submit btn"
            type="submit" name="Submit" value="Send"/>
        </div>
      </form>
    );
  } else {
    return (
      <div className="contact-thankyou">
        <h2>Thank You,</h2>
        <h3>We'll be in touch soon</h3>
        <button className="btn" onClick={this.handleSubmit}>
          New Message
        </button>
      </div>
    );
  }

  }

  render(){
    return (
      <div className="contactcontent">
        <div className="inner-content">
          <h1>How Can We Help You?</h1>

          <div className="center-content mailto">
            {this.displayform()}
            <iframe className="dummyframe"
              name="dummyframe"
              >
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
