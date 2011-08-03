<?php
// small little php script to get you started on your theme file.
$path_to_theme = 'scroll-step-animation';
//print_r($_SERVER);
$base_path = '/';
$path = $base_path.$path_to_theme;
function base_path() {
	global $base_path;
	return $base_path;
}
function path_to_theme() {
	global $path_to_theme;
	return $path_to_theme;
}
?>
