<?php

$file = fopen("data.txt", "r");
while(!feof($file)){
    $line = fgets($file);
    echo $line;
    echo "<br />";
}
fclose($file);