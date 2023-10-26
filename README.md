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
