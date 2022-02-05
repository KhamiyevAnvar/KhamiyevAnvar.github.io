<?php
	$requestPayload=file_get_contents("php://input");
	$object=json_decode($requestPayload,true);
	var_dump($object["yourName"]);
	var_dump($object["yourMail"]);
	var_dump($object["yourSub"]);
	var_dump($object["yourMessage"]);

	$yourName= $object["yourName"];
	$yourMail= $object["yourMail"];
	$yourSub= $object["yourSub"];
	$yourMessage= $object["yourMessage"];

	// databes
	$conn = new mysqli("localhost","root","","ftest");
	if($conn->connect_error){
		die('Connection failed : '.$conn->connect_error);
	}else if($yourName=="" || $yourMail=="" || $yourSub=="" || $yourMessage==""){
		die('Please fill out completely');
	}
	else{
		$stmt = $conn->prepare("insert into ftest(Name,Email,Sub,Message) values (?, ?, ?, ?)");
		$stmt->bind_param("ssss",$yourName,$yourMail,$yourSub,$yourMessage);
		$stmt->execute();
		die('Complete succesfully');
		$stmt->close();
		$conn->close();
	}
?>
