<?php

$label="unknown";
$color = null;

if(!empty($_GET)) {
    $color = "#{$_GET['color']}";
}

if($color == "#ff0000") {
    $label = 'Red';
}

if($color == "#00ff00"){
    $label = "Green";
}

if($color=="#0000ff"){
    $label="Blue";
}

?>
<div style="color:<?php echo $color; ?>">
    The color is <?php echo $label; ?>
</div>
<a href="?color=00ff00">Green</a> |
<a href="?color=ff0000">Red</a> |
<a href="?color=0000ff">Blue</a> |

https://localhost/mtbc/php/if_else.php?color=00ff00
