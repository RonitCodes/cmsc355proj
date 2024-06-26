# cmsc355proj
This is our project for 355 including all three sprints

Sprint 1: 
We worked on the log-in page along with the create playlist page which would be prototype 1 and prototype 6 from our midterm use case specification. Although we are still working through commit errors in the github, below we have provided screenshots of the pages ran locally on our devices. To develop these pages we employed javascript and css with plans to incorperate a flask or SQL database as our backend. After dealing with local errors of connecting to the git, we finally were able to push the login page as shown below. These prototypes are done and when we get to the landing page in the next split we will work on the routing of these pages to and from the landing page. Finally these are the testcases that we have planned for this sprint:

Login Page
1. Rendering Test
2. Input Field Validation
3. Form Submission
4. Authentication Flow

Playlist Create Page
1. Rendering Test
2. Input Field Validation
3. Song Selection
4. Playlist Creation



![image](https://github.com/RonitCodes/cmsc355proj/assets/136006251/eaffe8e0-38d1-4eed-ad8d-a0b7112050cd)


![image](https://github.com/RonitCodes/cmsc355proj/assets/136006251/471c1418-6ac9-4f24-8ba8-8903f4a2f64a)


Sprint 2:
Introduced Singup up page and Forgot password page. Also created routing between pages. This included prototypes 3 and 4. The information about the sprint can be found in the below google docs link, 
https://docs.google.com/document/d/1cQiLotdh715HLFYZPPpN497eyABKAgxFjGVSnySGMew/edit?usp=sharing


Sprint 3: 
In Sprint 3, we focused on optimizing our app's functionality to ensure a seamless user experience. One significant enhancement was rerouting every page to ensure smooth navigation throughout the application. We introduced a Context file to track the user's login status, setting a boolean value accordingly when the login button is clicked. This mechanism enables us to direct users effectively after actions like logging in or exiting the create playlist page. During testing, we employed multiple test cases, using fake user emails such as abc@gmail.com, abcd@gmail.com, and abcde@gmail.com, along with playlists of varying lengths. This thorough testing process ensures the robustness and reliability of our application across different scenarios. Implemented full UML diagram. Ensured going to specific pages depending on whether or not you "logged in"

UML Diagram here --> https://docs.google.com/document/d/1aETVE6ioTSZ2a5dvuNB1ITkwUcdPj4VBQDAskMpFeko/edit?usp=sharing
