<?php
if ($_POST["email"]<>'') {
    $ToEmail = 'tyler@corporatestoryproductions.com';
    $EmailSubject = "".$_POST["subject"]."\r\n";
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = "Name: ".$_POST["name"]."";
    $MESSAGE_BODY .= " From: ".$_POST["email"]."";
    $MESSAGE_BODY .= " Message: ".nl2br($_POST["message"])."";
    if(mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader))
    {
        echo "Thank you, Your email was sent.";
    }
    else
    {
        echo "Failed to send.";
    }
?>
<?php
} else {
?>
<form  name='contact-form' method='post' action='contactform.php'>
  <div className="contact-form">
    <label className="form-item">
      <input placeholder="Name"
        type="text" id="name" name="name"/>
    </label>
    <label className="form-item">
      <input placeholder="Email Address"
        type="text" id="email" name="email"/>
    </label>
    <label id="subject" className="form-item">
      <input placeholder="Subject"
        type="text" id="subject" name="subject"/>
    </label>
    <label id="message" className="form-item">
       <textarea placeholder="Message"
         id="message" name="message"></textarea>
    </label>
    <input className="form-item submit btn" type="submit" name="Submit" value="Send"/>
  </div>
</form>
<?php
};
?>
