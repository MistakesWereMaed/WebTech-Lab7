<?php

$file = fopen("data.txt", "a+");
$txt = $_POST['fname'] .''. ' ' .''. $_POST['lname'] .''. "\n";
fwrite($file, $txt);
fclose($file);

include 'show_data.php';