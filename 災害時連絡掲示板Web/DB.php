<?php
$ERROR="";
$dbConnection = mysqli_connect("localhost","dbuser","ecc","test");

if( mysqli_connect_errno () ){
    print "Failed to connect to database" . mysqli_connect_error();
    exit();
}
?>