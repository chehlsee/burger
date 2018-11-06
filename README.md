# Eat Da Burger!
Technologies used: Node, MySQL, Express.

## Description
This application uses a simple full stack application with a front end implemented with both HTML and CSS. The backend is implemented with node.js and express. Using handlebars we are able to update the HTML templating. 

The user is able to enter the name of any burger they wish to add to the menu. This will also add a new burger entry into the MySQL database. When the burger is first added the entry is "available" and placed on the left of the screen. The user can then choose to devour the burger by clicking on the button. Once the button is clicked to devour the burger will move to the right of the screen and the database will be updated with the devoured burger(s).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone git@github.com:chehlsee/burger.git
	
Next, install the application dependencies.

	cd burger
	npm install
  npm init
  npm install express
  npm install express=handlebars
  npm install mysql
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 8080 at the URL: `http://localhost:8080/`.
