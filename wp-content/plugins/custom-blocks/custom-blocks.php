<?php

/**
 * Plugin Name:       Custom Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-blocks
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function custom_blocks_custom_blocks_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'custom_blocks_custom_blocks_block_init');


function my_custom_block_enqueue_frontend_script()
{
	if (has_block('gallery-display-block/gallery-block')) {
		wp_enqueue_script(
			'my-custom-block-frontend-script',
			plugins_url('gallery.js', __FILE__),
			array(),
			'1.0',
			true
		);
	}
}
add_action('wp_enqueue_scripts', 'my_custom_block_enqueue_frontend_script');
