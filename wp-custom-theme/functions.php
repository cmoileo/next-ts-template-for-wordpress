<?php

function init_theme()
{
    add_theme_support('post-thumbnails');
    add_theme_support('html5');
    add_theme_support('title-tag');
    add_theme_support('align-wide');
    add_theme_support('custom-logo', array(
        'height'      => 175,
        'width'       => 400,
        'flex-width'  => true,
        'flex-height' => true,
    ));
    // Register navigations menus
    register_nav_menus(array(
        /* Header Full page */
        'top-left-1'            => 'Top Left 1',
        'top-left-2'            => 'Top Left 2',
        'top-left-3'            => 'Top Left 3',
        'top-left-4'            => 'Top Left 4',
        'top-left-5'            => 'Top Left 5',
        'top-left-6'            => 'Top Left 6',
        'top-right'             => 'Top Right',
        /* Header Burger */
        'burger-top'            => 'Burger Top',
        'burger-1'              => 'Burger 1',
        'burger-2'              => 'Burger 2',
        'burger-3'              => 'Burger 3',
        'burger-4'              => 'Burger 4',
        'burger-5'              => 'Burger 5',
        'burger-6'              => 'Burger 6',
        /* Footer */
        'bottom-1'              => 'Bottom 1',
        'bottom-2'              => 'Bottom 2',
        'bottom-3'              => 'Bottom 3',
        'bottom-4'              => 'Bottom 4',
        'bottom-5'              => 'Bottom 5',
        'bottom-6'              => 'Bottom 6',
        'bottom-end'            => 'Bottom End'
    ));
}
add_action('after_setup_theme', 'init_theme');


// Menu locations
function wp_menu_route() {
    $menuLocations = get_nav_menu_locations();
    $menuNames = array();
    
    foreach ($menuLocations as $location => $menuID) {
        $menuNames[$location] = get_term($menuID, 'nav_menu')->name;
    }
    
    return $menuNames;
}
add_action( 'rest_api_init', function() {
    register_rest_route( 'custom', '/menu/', array(
    'methods' => 'GET',
    'callback' => 'wp_menu_route',
));
});

// Individual menus
function wp_menu_single($data) {
    $menuLocation = $data['location'];
    $menuID = null;
    
    $locations = get_nav_menu_locations();
    foreach ($locations as $key => $value) {
        if ($key === $menuLocation) {
            $menuID = $value;
            break;
        }
    }
    
    if ($menuID) {
        $menuDetails = wp_get_nav_menu_items($menuID);
        return $menuDetails;
    }
}
add_action( 'rest_api_init', function() {
	register_rest_route( 'custom', '/menu/(?P<location>[\w-]+)', array(
		'methods' => 'GET',
		'callback' => 'wp_menu_single',
	));
});