# Front end Laborator.io README.md

# URLs
- client production site found here: https://daveordavid.github.io/laboratorio-client/
- backend heroku url here: https://intense-cove-31336.herokuapp.com/

# Client site description:
- Laborator.io is a database for appliances, tools, and household parts.
- It accepts Appiliance location, part number, and an image url
- the frontend works by interacting with a Rails API in order to populate a
SQL database

# Frontend User stories
1) As a user, I want to upload items by name and ID
2) As a user, I want to be able to delete from a table
3) As a user, I want to search for my items by name and have them return all previously entered data
4) As a user, I want to edit data myself but show data to non-logged in users.

# Backend site description:
- laborator.io's backend utilizes Ruby on Rails for setup
- RESTful routes include GET, POST, PATCH, and DELETE, allowing users to CRUD
- the database is a one to many relationship database.

# Frontend wirefram model:
https://i.imgur.com/YaGvEvl.png

# Backend Technologies include:
- Ruby
- Ruby on Rails
- Heroku
- RESTful API routes
- PostGreSQL

# Frontend Technologies include
- Ruby on Rails (for RESTful API)
- JavaScript
- jQuery
- Bootstrap
- HTML5
- CSS

# Future Plans - frontend
1) Displaying the Image URL as an image
2) Handlebars display in a row/column format for easy user reading
3) Significant CSS upgrades
4) Potential model use
5) DRYer event #message use

# Planning
Focus for the front end was the use of Handlebars to minimize the HTML usage
to provide a rolling display and refresh with only one line of HTML code.
Handlebar implamentation was a bit complex, and proper show/hide messaging
proved challenging for update/destroy within Handlebars, with my problem solving
strategy taking the approach of reserch -> try -> research -> try -> research ->
try several more times -> open issue.
