var name = "kiritosate";

<?php
    $out = array();
    foreach (glob('images/*') as $filename) {
        $p = pathinfo($filename);
        $out[] = $p['filename'];
    }
    echo 'callback(' . json_encode($out) . ')';
    echo "console.log(53543);";
?>