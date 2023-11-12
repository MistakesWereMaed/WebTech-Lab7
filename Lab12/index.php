<?php
    $cookie = $_COOKIE['cs4413'] ?? 0;
    if($cookie != 0){
        $message = 'Cookie value already set: ' . $cookie;
    } else {
        $cookie = 10;
        setcookie('cs4413', $cookie, 2);
        $message = 'New cookie value set: ' . $cookie;
    }
    
    echo $message
?>
