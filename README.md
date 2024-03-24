### Running the Project

1. Clone the repository
2. Run `docker-compose up` from the root of the project
3. Import the DB back up
4. Run `cd wp-content/themes/eval`
5. Run `npm install`
6. Run `npm run build` this will build the necessary js and css files, this will also run npm install and build in the custom blocks plugin folder
7. Visit `http://localhost` in your browser to access the WordPress site
8. u: admin p: password to access the admin dashboard

### Design decisions

Starting off with the theme I decided to stick with blank slate as it was a useful base to build from, when building from production I would problably spend more time going through and removing unneccesary boilerplate code and renaming the theme namespace.

In terms of tooling I used webpack to bundle and efficiently serve javascript files, I also used the inbuilt wordpress enqueue and filemtime functionality to ensure that the css and javascript files are given a different version number every time they are saved to prevent clients from caching older versions.

I used sass in this project to help manage the css files and prevent repetition.

I used bootstrap in this project, it can help reduce css file size and prevent you from writing repetitive code and it also has entire components available which can helop speed up development.

For the gallery I decided to custom code it, I chose this because the bootstrap carousel has a different design, I used css transform to move the gallery, the items are a set width of 400px so this works well on large screens but would have to be revised if built ro be responsive.

I decided to use custom gutenberg blocks to allow the user to be able customize and reorder components on the page, this was also the more challenging part of the project as it was the first time using them, I had opted to use ACF blocks in the past.
Overall the setup is a little more difficult than ACF however ACF is a paid product, I also liked how it gave you full customizability of the editor view aswell to ensure that the editing experience was good.
From the developer experience there are a few things I would like to improve, for example there is no Hot Reload functionality, once the custom block is set, any changes made to it require you to update the view from the WP dashboard.
