<?php
$date = new DateTime('2015-01-01 12:12:12');
$date2 = new DateTime();

$formattedDate = $date->format('Y-m-d h:i a');
echo "Hello World it is {$formattedDate}<br><br>";

$formattedDate2 = $date2->format('Y-m-d h:i a');
echo "Hello World it is {$formattedDate2}";
