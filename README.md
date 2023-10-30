# Next Wordpress

A minimalstic starter Next JS template to use with Wordpress, with ACF and Woocomerce.

## Authors

- [@cmoileo](https://www.github.com/cmoileo)

## License

Next Wordpress © 2023 by Léo Fezard is licensed under CC BY 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/

## Contributing

Anyone can feel free to contribute to this project.

## Run Locally

Clone the project

```bash
  git clone https://github.com/cmoileo/next-ts-template-for-wordpress
```

Go to the project directory

```bash
  cd next-ts-template-for-wordpress
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Documentation

First and foremost, you have to install Wordpress, either locally or deployed.\
Once you have done it, in your Wordpress directory, go to wp-content/themes and drag the "wp-custom-theme" that you can find at the root of the repo.\
This will provide your Wordpress Backoffice custom functions that the Next frontend needs.\
Finnaly, at the root of the Next directory, add a .env file with the variable "WP_URL" in it, like this : \
WP_URL="https://your-wordpress-site.com"

## Menus

In the layout directory you'll find both header and footer. Both are already imported in the layout.tsx file. These components use the hook "menus.ts" that can be found in the hook directory. To call menus, you juste have to call the function getMenu with the id of your menu as a props.

```javascript
const menu = await getMenus("top-left-1"); //the name of the menu is displayed in the backoffice when you create a menu
```

## Posts

In the posts directory, you'll find a page that is the archive page and a page inside [slug] directory that is single post page. They both use hooks : the archive page uses getLastestPosts with a number as a prop (the number represents the number of posts to display); and the singlePage use getPost() with the post slug as a prop.
