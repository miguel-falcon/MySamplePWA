# My Sample PWA

## Overview
My Sample PWA is a Progressive Web Application that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin. The application is designed to be simple and user-friendly, providing instant feedback on temperature conversions.

## Project Structure
```
MySamplePWA
├── src
│   ├── css
│   │   └── converter.css       # Styles for the temperature converter
│   ├── js
│   │   └── converter.js        # JavaScript logic for temperature conversion
│   ├── index.html              # Main HTML document for the PWA
│   ├── manifest.json           # Web app manifest with metadata
│   └── sw.js                   # Service worker for offline capabilities
├── assets
│   └── icons
│       └── favicon.ico         # Favicon for the application
├── package.json                # npm configuration file
├── README.md                   # Documentation for the project
└── .gitignore                  # Files and directories to ignore in version control
```

## Installation
To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd MySamplePWA
npm install
```

## Usage
1. Open `src/index.html` in a web browser.
2. Enter a temperature value in the input field.
3. Select the unit of the input temperature.
4. Choose the desired output unit to see the converted temperature.

## Features
- Temperature conversion between Celsius, Fahrenheit, and Kelvin.
- Responsive design for various screen sizes.
- Offline capabilities through service worker.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.