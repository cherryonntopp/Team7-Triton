# Food4Tritons - WIC SPR '26

## Overview
Food4Tritons is a web-based platform designed to centralize food-related resources available to the UC San Diego community. The website serves as a one-stop hub where students can access food pantry information, discover food-related clubs and events, and browse pantry-friendly recipes.

The project was created to increase awareness of campus food resources, improve accessibility, and encourage student engagement through food security initiatives.

### Features

## Home Page

The Home page serves as the central navigation hub for the website. It introduces Food4Tritons and provides quick access to all major sections.

The page includes:

* Navigation to Pantry Inventory, Clubs & Events, and Recipes
* Information about pantry availability and operating hours
* Information about volunteer opportunities
* Instructions for submitting food-related clubs and events to be featured on the website

## Pantry Inventory

The Pantry Inventory page provides students with information about food items available through the Triton Food Pantry.

Inventory categories include:

* Produce
* Dairy
* Protein
* Grains and Pasta
* Snacks
* Pantry Staples
* Beverages

The page also displays pantry availability and distribution times so students can plan visits accordingly.

### Clubs & Events Calendar

The Clubs & Events page highlights food-related activities occurring on campus.

Features include:

* Calendar view of upcoming food-related events
* Food club meetings and activities
* Volunteer opportunities
* Campus food programs
* Event promotion

Students and organizations may submit food-related events and clubs to be added to the website calendar for promotion and volunteer recruitment.

### Recipes

The Recipes page helps students make use of pantry ingredients through curated recipes.

Features include:

* Featured hero recipe slider
* Dynamic recipe cards
* Detailed recipe instructions
* Ingredient lists
* Difficulty indicators
* Preparation times
* Pantry-friendly meal suggestions

Recipes can be filtered by:

* Quickest
* Least Ingredients
* Easiest
* Vegetarian

Recipe information is stored in Google Sheets and loaded dynamically using PapaParse, allowing recipes to be updated without modifying website code.


## Technologies Used

### Front-End

* HTML5
* CSS3
* JavaScript

### Libraries

* Tailwind CSS
* PapaParse

### Data Management

Google Sheets is used as the recipe database.

Recipe Spreadsheet:

https://docs.google.com/spreadsheets/d/1VOE1i8R2X3B9xgBf9wZ3tAM_iueKT6ShM_7XRvf3cRA/edit?gid=37022669#gid=37022669

PapaParse retrieves and converts spreadsheet data into JavaScript objects that are rendered dynamically on the Recipes page.

## Project Structure

```text
Food4Tritons/
│
├── index.html
├── pantry.html
├── clubs.html
├── recipes.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── home.js
│   ├── pantry.js
│   ├── clubs.js
│   └── recipes.js
│
└── README.md
```

### Organization

The project follows a modular structure:

* One shared CSS file contains all styling, colors, typography, layouts, and reusable components.
* Each HTML page has its own JavaScript file responsible for page-specific functionality.
* Recipe data is maintained externally through Google Sheets and loaded dynamically at runtime.

## Recipe Image Sources

Recipe images are externally hosted and referenced through URLs.

Image sources include:

* Kimchi Fried Rice
* Breakfast Burrito
* Black Bean Tacos
* Bean Tostadas
* Fried Rice
* Sausage Potato Sheet Pan Dinner
* Vegetable Stir Fry
* Lemon Orzo Pasta
* Pasta Dishes
* Aguachile
* Rice Bowl Variations
* Pantry Pasta
* Crispy Air-Fried Tofu

Image URLs are documented within the project and are used to visually represent recipes loaded from the spreadsheet.


## How the Recipe System Works

1. Recipe data is stored in Google Sheets.
2. PapaParse downloads the spreadsheet as a CSV file.
3. JavaScript converts spreadsheet rows into recipe objects.
4. The featured recipe hero slider is automatically generated from the recipe data.
5. Recipe cards are dynamically displayed on the page.
6. Users can filter recipes by category.
7. Selecting a recipe opens a modal displaying ingredients and cooking instructions.

This approach allows recipe information to be updated without modifying website source code.


## Purpose

Food insecurity impacts many college students. Although UC San Diego offers numerous resources, information is often distributed across multiple departments and websites.

Food4Tritons aims to:

* Improve visibility of campus food resources
* Simplify access to pantry information
* Encourage student participation in food-related programs
* Promote volunteer opportunities
* Help students make better use of pantry ingredients
* Support food security efforts across campus

## Future Improvements

Potential future enhancements include:

* User accounts
* Saved recipes
* Search functionality
* Real-time pantry inventory updates
* Nutritional information
* Recipe submission system
* Event approval workflow
* Mobile application support
* Personalized recipe recommendations

---

## Authors
Pragya Gunturu
  Gmail: pgunturu@ucsd.edu
  LinkedIn: https://www.linkedin.com/in/pragya-sri-gunturu-36b25227b
  GitHub: https://github.com/gpragya207-cpu
Shana Ibatuan
  Gmail: sibatuan@ucsd.edu
  LinkedIn: https://www.linkedin.com/in/shana-ibatuan/
  GitHub: https://github.com/cherryonntopp
Sukirat Kaur
  Gmail: s8kaur@ucsd.edu
  LinkedIn: https://www.linkedin.com/in/sukirat-kaur-7a2406353
  GitHub: https://github.com/s8kaur
Angelina Jo
  Gmail: asjo@ucsd.edu
  LinkedIn: https://www.linkedin.com/in/angelina-jo-6b051b322/
  GitHub: https://github.com/s8kaur

