<?php
    $cookie = $_COOKIE['cs4413'] ?? 0;
    $cookie = $cookie + 10;
    setcookie('cs4413', $cookie, 2);
    $message = 'Cookie value: ' . $cookie;
    echo $message
?>

<h1>Welcome</h1>
<p><?= $message ?></p>
