<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="wrapper" class="hfeed">
    <header id="header" role="banner">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="<?php echo home_url(); ?>">
            <span class="material-symbols-outlined">
              home
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <?php
            $menu = wp_get_nav_menu_object('main-menu');

            if ($menu) {
              $menu_items = wp_get_nav_menu_items($menu->term_id);

              if (!empty($menu_items)) {
                echo '<ul class="navbar-nav">';
                foreach ($menu_items as $menu_item) {
                  echo '<li class="nav-item"><a class="nav-link" href="' . $menu_item->url . '">' . $menu_item->title . '</a></li>';
                }
                echo '</ul>';
              }
            }
            ?>
          </div>
        </div>
      </nav>
    </header>
    <div id="container">
      <main id="content" role="main">