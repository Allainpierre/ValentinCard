<?php
if(isset($_FILES["file1"])){
	$name = $_FILES['file1']['name'];
	move_uploaded_file($_FILES['file1']['tmp_name'], "img/$name");
	$name = $_FILES['file2']['name'];
	move_uploaded_file($_FILES['file2']['tmp_name'], "img/$name");
	header("Location: /ValentinCard");
}