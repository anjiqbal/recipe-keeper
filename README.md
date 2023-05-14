# Hackathon #9 - Recipe Keeper App

###### May 2023

A full-stack app that allows you to store and delete recipes.

## Screenshots

![Recipe keeper gif](./images/recipeKeeper.mp4)

## Motivation

For this project we were asked to build a fully-functional back-end that can perform all the CRUD operations on recipe data. This involved creating a router to handle requests and responses, and created endpoints for all CRUD operations. These endpoints were tested using Thunder Client and served as responses to HTTP requests. I also created helper functions that interact with a recipes collection and manipulated the data stored in a JSON file. Finally, I imported these helper functions into the app.js file and connected them to the API endpoints. I then hooked up the back-end functionality to the front.

## Lessons Learned

Main lessons learned:

- How to set up a router to handle requests and responses and create the endpoints that serve the responses to HTTP requests
- Creating helper functions to carry out the CRUD operations
- When getting a 404 error, check the URI and the path thoroughly to make sure they are correct


## Tech Stack

**Client:** Node, Express, JavaScript, HTML, CSS

## Installation and Setup Instructions

You will need `node` and `npm` installed on your machine.

Clone the repo:

`https://github.com/anjiqbal/recipe-keeper`

Install the required npm modules:

`npm install`

Start the application:

`npm start`

## Improvements

Potential future improvements:

- Add the ability to edit recipes - I have the back-end functionality but have not hooked it up to the front as of yet
-  Move the data storage from the REST API to a database
- Improve the user-experience on the front-end

## Usage

1. Fill in all the fields to add a recipe.
2. Click on the 'Get recipes' button to make sure all the recipes are loaded
3. Delete a recipe by clicking on the recipe's delete button
