<?php

$items = [
    'for',
    'foreach',
    'while',
    'do-while'
];

$count = count($items);

echo "PHP Supports {$count} types of loop";

$i=0;
$li='';
while($i < $count) {
    $li .= "<li>{$items[$i]}</li>";
    $i++;
}

echo "<ul>{$li}</ul>";
