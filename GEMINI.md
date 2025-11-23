# Project Overview

This is a static website for the Zaanse wielerclub DTS (Door Training Sterk), a cycling club. The site is built using the [Hugo](https://gohugo.io/) static site generator and the `hugo-fresh` theme, which uses the [Bulma](https://bulma.io/) CSS framework.

The site's content is managed in Markdown files within the `content` directory. The main configuration is in `hugo.yaml`, which defines the site structure, navigation, and theme.

## Building and Running

To work with this project, you need to have Hugo installed. You can find installation instructions on the [Hugo website](https://gohugo.io/getting-started/installing/).

### Running the development server

To run the local development server, use the following command. This will start a server, and you can view the site at `http://localhost:1313/`. The site will automatically reload when you make changes to the content or templates.

```bash
hugo server
```

### Building the static site

To build the static site, run the following command. The generated static files will be placed in the `public` directory.

```bash
hugo
```

## Development Conventions

*   **Content:** All website content is stored in the `content` directory as Markdown files.
*   **Styling:** The visual appearance of the site is controlled by the `hugo-fresh` theme, which is based on the Bulma CSS framework. To make significant changes to the styling, you may need to modify the theme files in the `themes` directory or create custom CSS.
*   **Configuration:** The main site configuration is in `hugo.yaml`. This file controls the site's title, menu structure, and other parameters.
