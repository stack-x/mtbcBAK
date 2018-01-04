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
do {
  $li .= "<li>{$items[$i++]}</li>";
} while ($i < $count);

echo "<ul>{$li}</ul>";
