# Gradient Generator

This project is a simple web application that generates a gradient background and allows you to copy the CSS code for the gradient. The colors of the gradient can be randomly changed by clicking on the provided buttons.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Gradient Generator is a web-based tool that allows users to generate a linear gradient background and copy the corresponding CSS code. The gradient is initially set to transition from `#051937` to `#008793`. Users can generate new random colors for each end of the gradient by clicking the respective buttons.

## Features

- Generates a linear gradient background.
- Displays the CSS code for the generated gradient.
- Allows users to copy the CSS code with a single click.
- Buttons to randomly generate new colors for the gradient.

## Installation

No installation is necessary. Simply clone or download the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/your-username/gradient-generator.git
cd gradient-generator
```

## Usage

1. Open `index.html` in a web browser.
2. Click the buttons to generate new random colors for the gradient.
3. Copy the generated CSS code by clicking on the displayed code.

## Files

- `index.html`: The main HTML file that structures the web page.
- `style.css`: The CSS file that styles the web page.
- `script.js`: The JavaScript file that handles the logic for generating and displaying the gradient and copying the CSS code.

### index.html

This file contains the structure of the web page, including the buttons to generate new colors and the section to display the CSS code.

### style.css

This file contains the styling for the web page, including the gradient background, button styles, and the layout.

### script.js

This file contains the JavaScript logic to:
- Generate random hex color values.
- Convert hex colors to RGB.
- Update the gradient background and displayed CSS code.
- Copy the CSS code to the clipboard.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to improve the project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
