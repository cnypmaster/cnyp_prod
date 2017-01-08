<?php
//require_once('class.phpmailer.php');
require "PHPMailerAutoload.php";
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
// validate the variables ======================================================
	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';
	if (empty($_POST['email']))
		$errors['email'] = 'E-mail is required.';
	if (empty($_POST['phone']))
		$errors['phone'] = 'Mobile No is required.';
	if (empty($_POST['message']))
		$errors['message'] = 'Message is required.';
	
// return a response ===========================================================
	// response if there are errors
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
		$data['message'] = "Please enter valid details and try again.";
		
	} else {
		$retrn = false;
		$to      = 'chotanagpur.youthpune@gmail.com';
		$subject = 'Contact Us Mail : A Mail from Website Visitor';
		$message = "Name :". $_POST['name'] . ", E-mail: " .$_POST['email']. " Mobile No : ".$_POST['phone']."   Message : ".$_POST['message'];
		$headers = 'From: chotanagpur.youthpune@gmail.com' . "\r\n" . 'Reply-To: chotanagpur.youthpune@gmail.com';
		$retrn = mail($to, $subject, $message, $headers);
		if(!$retrn)
		    {
		    	/*$data['success'] = false;
				$errors['name'] = "";
				$errors['email'] = "";
				$errors['phone'] = "";
				$errors['message'] = "";
				$data['errors']  = $errors;
	    		$data['message'] = 'Your message could not be sent due to some technical issue. Please try later.';
				*/
				echo "Mailer Error: " . $mail->ErrorInfo;
		    }
		else
		    {
		    	$data['success'] = true;
	    		$data['message'] = 'Thank you. Your email has been successfully sent.';
		    }
		/*
		$mail = new PHPMailer(); // create a new object
		$mail->IsSMTP(); // enable SMTP
		$mail->SMTPAuth = true; // authentication enabled
		$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465; // or 587
		$mail->IsHTML(true);
		$mail->Username = "chotanagpur.youthpune@gmail.com"; //Email that you setup
		$mail->Password = "p@ssword12345"; // Password
		$mail->Subject = "Contact Us Mail : A Mail from Website Visitor " ;
		$mail->Body = "Name :". $_POST['name'] . ",<br> E-mail: " .$_POST['email']. " <br> Message : ".$_POST['message'];
		$mail->AddAddress("chotanagpur.youthpune@gmail.com"); //Pass the e-mail that you setup
		 if(!$mail->Send())
		    {
		    		echo "Mailer Error: " . $mail->ErrorInfo;
		    }
		    else
		    {
		    	$data['success'] = true;
	    		$data['message'] = 'Thank you for sending e-mail.';
		    }
		*/
	}
	echo json_encode($data);