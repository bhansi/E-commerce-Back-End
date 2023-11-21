# E-commerce-Back-End

## Description

This program simulates the backend of an e-commerce website. Products, and their associated data, are stored in a MySQL database and CRUD commands can be performed on the data using HTTP requests.

## Table of Contents

[Installation](#installation)<br>
[Usage](#usage)<br>
[Questions](#questions)<br>

## Installation

This application uses the mysql database program, which can be installed [here](https://dev.mysql.com/downloads/mysql/).<br>
Additionally, this application has no front end. In order to interact with the database and perfrom CRUD actions, the Insomnia application can be installed [here](https://insomnia.rest/download).<br><br>

1. Clone the repository.<br>
2. Run 'npm i' in the command line.<br>
3. Change the '.env.EXAMPLE' file's name to '.env'.<br>
4. Edit the contents of the '.env' file to include your mysql database user (typically 'root') and password.<br>
5. Run 'mysql -u root -p' in your command line and enter your password to login to mysql.<br>
6. Run 'source db/schema.sql' in the mysql command line.<br>
7. Logout of mysql using 'exit' or 'quit'.<br>
8. Run 'npm run seed' in the command line to seed the database.<br>

## Usage

1. Run 'npm start' in the command line.<br>
2. Open Insomnia and execute GET, POST, PUT, or DELETE requests to http://localhost:3001.<br><br>

The following [video](https://drive.google.com/file/d/1o8ca61f51rKt35cjiynIJNffIpqo2Xkt/view?usp=sharing) demonstrates the setup and use of the application. Additionally, the available HTTP requests are outlined below.<br><br>

Available GET requests:<br>
1. All categories (/api/categories)<br>
2. All products (/api/products)<br>
3. All tags (/api/tags)<br>
4. One category (/api/categories/:id)<br>
5. One product (/api/products/:id)<br>
6. One tag (/api/tags/:id)<br><br>

Available POST requests:<br>
1. Create category (/api/categories)<br>
2. Create product (/api/products)<br>
3. Create tag (/api/tags)<br><br>

Available PUT requests:<br>
1. Update category (/api/categories/:id)<br>
2. Update product (/api/products/:id)<br>
3. Update tag(/api/tags/:id)<br><br>

Available DELETE requests:<br>
1. Delete category (/api/categories/:id)<br>
2. Delete product (/api/products/:id)<br>
3. Delete tag(/api/tags/:id)<br><br>

## Questions

[GitHub](https://github.com/bhansi)<br>
If you have any questions, you can reach me via my [email](mailto:baljotshansi@gmail.com).
