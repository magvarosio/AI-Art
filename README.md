<a id="idtext"></a>

# 🤖 AI Art 🤖


<img width="1809" alt="aiart" src="https://user-images.githubusercontent.com/112773333/212724264-d64dec8a-407f-4dfb-843f-7113b19aaa6e.png">
 

## Overview

## Table of Contents
- [Concept](#concept)
- [Project Brief](#project-brief)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Installation instructions](#installation-instructions)
- [Process](#process)
- [Developing the Backend with Express and MongoDB ](#developing-the-backend-with-express-and-mongodb)
- [Creating the Frontend with React](#creating-the-frontend-with-react)
- [Challenges and Wins](#challenges-and-wins)
- [Key Learnings](#key-learnings)
- [Contact](#contact)

## Concept

AI Art was my third project at Software Engineer course at General Assembly. This project was done in a team of three and was our first attempt at building a full-stack web application.
We built a social media platform for sharing art created using AI. The backend was constructed using Express, Insomnia, and MongoDB, while the frontend was developed using React, SCSS, and Bootstrap. The platform allows users to share their own AI-generated art and to discover the limits of what can be created using artificial intelligence in the realm of art.
The images on this website are all produced using AI.

## Timeline
- 9 days


## Deployment 

This website was deployed with Heroku and is accessible here -> https://p3seiaiart.herokuapp.com/ .
 When not in use, Heroku's free servers sleep, so please give them a few seconds to wake up!

## Project Brief

- 9 days to plan, build, and test our most advanced project to date with achievable scope and a focus on creating a professional finished product.
- Build a full-stack application by making your own backend and your own front-end.
- Use an Express API to serve our data from a Mongo database.
- Consume our API with a separate frontend built with React.
- Be a complete product with multiple relationships and CRUD functionality for multiple models.
- Have a visually impressive design.


![gif github](https://user-images.githubusercontent.com/112773333/212740198-8107d9ba-3bb2-482a-b656-d5b2b6885227.gif) 


## Technologies Used
### Database:
- [x]  MongoDB
### Frontend:
- [x]  JavaScript (ES6)
- [x]  React.js
- [x]  Axios
- [x]  HTML5
- [x]  CSS3 + SASS
- [x]  React Bootstrap
### Backend:
- [x]  Node.js
- [x]  Express
- [x]  MongoDB
- [x]  Mongoose
- [x]  Bcrypt
- [x]  JSONWebToken
### Development Tools:
- [x]  VS Code
- [x]  Insomnia
- [x]  Yarn
- [x]  Git + GitHub
- [x]  Google Chrome development tools
- [x]  Cloudinary
- [x]  Escalidraw (planning)
- [x]  Trello
- [x]  Midjourney (to generate AI images)
- [x]  Zoom
- [x]  Slack
- [x]  Heroku

## Installation instructions

- Clone or download the repo
- In the project root install all of project the dependencies with npm or yarn
- In the project root run the command yarn start or npm start
- Ensure the terminal responds with 'app is listening on port 4000'
- Open your chosen browser and navigate to http://localhost:4000/

## Process

### Planning 

We spent half a day brainstorming ideas and potential concepts for the project. We ended up building a platform for artists who want to share their AI project and their prompts. The artist can show off the picture and the prompt they used on Midjourney or on other similar software to create them. We had a lot of influence from websites like Pinterest and Instagram. The core functionality of the application is based around Users, Projects and how the two interact with each other and themselves.
Here is the plan: 
(If you like to see our plan in detail, please press the on image. It will take you to a separate page)

![image2](https://user-images.githubusercontent.com/112773333/212725983-39819dcb-77a7-490b-ad18-1012616e938b.png)


### Developing the Backend with Express and MongoDB 

We worked together on the backend to avoid confusion about models and databases and to solidify our understanding of the concepts. I was in charge of writing the coding and making regular commits to Github and the process went smoothly.
After installing the necessary dependencies and setting up the basic middleware to run the server, we began creating the schemas for users, projects, and reviews.


### Models

The Project Schema included a many-to-one Review model to allow multiple reviews per user and also had a range of other fields. We made sure the display picture would be stored as a string in order to convert the image URL of uploaded images.


<img width="778" alt="Screenshot 2023-01-16 at 16 33 48" src="https://user-images.githubusercontent.com/112773333/212727008-993bbbf4-4b5e-4cb9-bdcc-7ba97232663a.png">

The User Schema included information such as a username, email, and password, as well as a confirmation field. Additionally, the schema included a virtual field called "projects" which represents the pages on the site that a user has created and has permission to edit or delete. The passwords of users were also secured using the bcrypt hashing function.

![ok](https://user-images.githubusercontent.com/112773333/212729486-1b17610a-2477-488a-86cf-de50789772f0.png)

### Authentication

To authenticate users, we implemented a controller using JsonWebToken to verify the validity of a user. This controller was used in conjunction with a secure route that utilised the token to confirm the authenticity of the user.


![Screenshot 2023-01-16 at 16 48 21](https://user-images.githubusercontent.com/112773333/212729650-c694286d-e4a2-404a-b5f6-7eb239dc998a.png)

### Controller and Routes

To organize the various API requests and endpoints for the project, we created controllers for each request type (GET, PUT, POST, DELETE) and assigned them to the appropriate endpoints. We also implemented middleware to determine which routes required authentication and which ones did not.
 
<img width="619" alt="Screenshot 2023-01-16 at 17 01 55" src="https://user-images.githubusercontent.com/112773333/212732072-08a2e466-6c00-4b52-bd77-a435afeae479.png">

The secureRoute middleware was an important feature of the project because it allowed us to control access to certain endpoints based on the authentication status of the user. By requiring users to be authenticated in order to access certain routes, we were able to ensure that only authorized users were able to make changes to the site. For example, a user might only be able to edit or delete reviews that they had created themselves, or change information on a project page that they had created. 

<img width="621" alt="Screenshot 2023-01-16 at 17 03 37" src="https://user-images.githubusercontent.com/112773333/212732354-7983a0dc-94e1-4a8d-825f-1ad1bc170606.png">

We tested all our routes while creating them using Insomnia. We verified that we could log in, register, and use token authorisation to check the authentication rights on all of our routes as we were building them using Insomnia.

![image1](https://user-images.githubusercontent.com/112773333/212732655-ca7c1f1a-7538-4db9-ae72-b3385dec90d2.png)


## Creating the Frontend with React

### Component 

To build the frontend of our project, we started by setting up a React app and connecting it to the database. This allowed us to retrieve and display data from the database on the frontend.

Once the app was set up, we created all of the components that we planned to use in the project. These components represented different sections or pages of the site, such as the homepage, gallery pages, and user profiles. We connected these components together using the React Router DOM, which allowed us to navigate between them.

### Projects

To display the projects on the site, we used a get axios request to retrieve the data and then used the map method, along with bootstrap rows and columns, to display the data for each project in card format. We also used the length of the projects array to dynamically update the number of projects available on the site. This allowed us to efficiently display the project data and ensure that the project count was always up-to-date.
I recently changed the site's style to make it more like a social media platform, specifically Instagram.

<img width="555" alt="Screenshot 2023-01-16 at 17 11 05" src="https://user-images.githubusercontent.com/112773333/212734026-0473b1bc-9f64-4bbe-9d54-6d072959eeae.png">


### Styling 

Unfortunately, we ran out of time to fully complete the styling of the site, so I recently updated the style of the entire site.
I used Bootstrap for the first time on this project and found it to be very helpful in styling the CSS and positioning HTML elements across the site. Bootstrap made it easier to achieve the clean look that I wanted for the site and also made it fully responsive to different screen sizes, including mobile devices. 
I also created many of the images used on the website using an AI program called MidJourney.  

### Login and Register Page: 

![image6](https://user-images.githubusercontent.com/112773333/212734135-2523e15a-27c2-405e-96cf-17f6b4665b30.png)

![image11](https://user-images.githubusercontent.com/112773333/212734249-8e6558b4-958c-4c4c-b606-b6072068b391.png)


## Challenges and Wins

### Challenges

Next time, it might help if we merge work on GitHub as soon as we can and before moving on. It might also help if we set clear goals and expectations and encourage open and honest communication. That way, we can make sure everyone is on the same page and avoid any problems with communication or conflicts.

### Wins

This was my first big project and involved delving deeper into React and constructing more intricate components.
I think the design is clean-looking. I'm especially happy with the gallery and the login and registration forms and the fact that I made every page mobile responsive. All in all, I feel like I learned a lot from this project and I'm really proud of the end result.

## Future Improvement

- Include User Profile

## Key Learnings

Many of my takeaways from this project were about coding as a team. This was my first time using GitHub with multiple people editing one repository. Learning to avoid merge conflicts was very useful. This project was also an exercise in project planning. We went in with lots of great ideas but ended up having to shelf many of them due to time and resource constraints.
Overall, this is my first significant project, and it's incredibly rewarding to be able to build a Full Stack Application in such a small amount of time.  
 

## Contact

- Email - amvarosio8@gmail.com

[Back to the top ⬆️](#idtext)



