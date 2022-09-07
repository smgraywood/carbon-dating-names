# Carbon Dating Names


See it live! [Code Sandbox](https://731py2.csb.app/)

<img src="https://cdn-icons-png.flaticon.com/512/5458/5458471.png" width="300px">

### Overview

<hr>

Carbon Dating Names is a project designed to allow users to input name(s) and see the predicted age of the corresponding name. Focus is on code robustness and elegant user experience. 

### Tech Stack

<hr>

*Languages*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


*Frameworks*

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MaterialUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)


*Testing*

![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)


### Running Locally

<hr>

1. Fork & clone this repo 
1. In your CLI, from the root directory, run `npm install'
1. From the root directory & run `npm start`
1. Carbon Dating Names will be running on localhost:3000

### Thought Process, Assumptions, and Improvements

<hr>

#### a. Thought process to build the solution

    - Creation of design
    - Think through what tasks need to be accomplished in what order
        - We need a frontend which allows users to input a name and to receive back an age.
        - No database requested, though this could potentially be paired with a database to increase usability.
        - We need an elegant UI/UX
        - Think about how these things can compliment one another
    - Build basic UI in order to play with API
    - Build out API
        - Built out all components of API but then removed country due to buggy API response
    - Go back to update front end, create better UI/UX
#### b. Assumptions made

    - Assumed that devs using this repo would be on Mac
    - Assumed that devs running this program would have node downloaded
    - Assumed comma separated list was sufficient for input
    - Assumed names call would be sufficient for API usage (tried country call and realized it added insufficient value and had bugs so took out of code base)
    - Assumed no DB required
    - Assumed use of CSS alongside Material UI


#### c. Future Improvements

    - I would like to work on the logic behind the multiple names in order to allow users to input the list in multiple forms and still have the API call work
    - More testing




###### Favicon Attribution: [Dinosaur icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/dinosaur)