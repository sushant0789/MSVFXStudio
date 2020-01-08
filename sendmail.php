<?php
//phpinfo();

if(isset($_POST['email'])) {
	//$headers  = "MIME-Version: 1.0\r\n";
  	//$headers .= "Content-type: text/html; charset=utf-8\r\n";
	// CHANGE THE TWO LINES BELOW
	$email_to = "mahesh.gadakh@msvfxstudio.com";
	
	$email_subject = "website html form submissions";
	
	
	/*function die($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}*/
/*first_name
email
subject
comments*/
	
	// validation expected data exists
	if(!isset($_POST['first_name']) ||!isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['comments'])) {
		die('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['first_name']; // required
	//$last_name = $_POST['last_name']; // required
	$email_from = $_POST['email']; // required
	$subject = $_POST['subject']; // not required
	$comments = $_POST['comments']; // required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$first_name)) {
  	$error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	die($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "First Name: ".clean_string($first_name)."\n";
	//$email_message .= "Last Name: ".clean_string($last_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "subject: ".clean_string($subject)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
	
// create email headers
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Your name <info@msvfxstudio.com>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

ini_set("SMTP","mail.msvfxstudio.com");
   ini_set("smtp_port","25");
   ini_set("sendmail_from","noreply@msvfxstudio.com");

mail($email_to, $email_subject, $email_message, $headers);  
?>

<!-- place your own success html below -->

Thank you for contacting us. We will be in touch with you very soon.

<?php
}
die();
?>