# To-Do List

You can visit the live site [here](https://jtam90.github.io/todolist/).

For my Milestone Project 2 in L5 Web Application Development, I have designed and created a To-Do List. This has been created with the intention of users being able to add a list of tasks with the ability of checking them off, editing them, deleting them and storing them. This website has been developed in such a way that it is very simple to use, as well as being fully accessible and responsive, covering a range of different devices.

![Responsive-View](https://github.com/jtam90/todolist/blob/main/documents/screenshots/responsive-view.png)

# User Experience - UX

## User Stories
As a User...
- I would like to be able to have a simple application that allows me to add a list of tasks that I would like to complete.
- I would like to be able to check the tasks off as they are completed.
- I would like to be able to edit tasks, so that I can change the wording.
- I would like to be able to delete tasks and for an alert to pop up incase the delete button is clicked accidentally.
- I would like to be able to store my list so that when the webpage is reloaded, I can still see my completed and/or outstanding tasks.

# Design

## Colour Scheme

Below represents the different colours used in this project:

- ![#5F9EA0](https://via.placeholder.com/15/5F9EA0/000000?text=+) `#5F9EA0`
- ![#0b5e60](https://via.placeholder.com/15/0b5e60/000000?text=+) `#0b5e60`
- ![#ddede8](https://via.placeholder.com/15/ddede8/000000?text=+) `#ddede8`
- ![#f9f9f9](https://via.placeholder.com/15/f9f9f9/000000?text=+) `#f9f9f9`

I chose these colours as they complement each other well and co-ordinate nicely with the background image. I also thought the colours worked well for a To-Do List, as they are not distracting and instead have quite a calming effect.

## Typography

  I have used the font "Alegreya Sans" as the font throughout the site, with a fall back font of "sans-serif" for easy readability and simplicity. I have used <a href="https://fonts.google.com" target="_blank">Google Fonts</a> for this.

  ![Font Screenshot](https://github.com/jtam90/todolist/blob/main/documents/screenshots/font-screenshot.png)

  ## Imagery

  I have used just one image for this site, which is used as the background image. I chose this image because it is simple and does not distract the user. Plants are known for their soothing and relaxing effects on the mind, which complement the use of a To-Do List nicely.

  ![Background Image](https://github.com/jtam90/todolist/blob/main/assets/images/background-image.jpg)

  # Wireframes

  ## Desktop

  ![Desktop Wireframe](https://github.com/jtam90/todolist/blob/main/documents/screenshots/wireframe-desktop.png)

  ## Tablet

  ![Tablet Wireframe](https://github.com/jtam90/todolist/blob/main/documents/screenshots/wireframe-tablet.png)

  ## Mobile

  ![Mobile Wireframe](https://github.com/jtam90/todolist/blob/main/documents/screenshots/wireframe-mobile.png)



  # Features

  ## Heading

  The heading is in an italic font style for emphasis and says "Things To Do..."

  ![Heading Screenshot](https://github.com/jtam90/todolist/blob/main/documents/screenshots/heading-screenshot.png)

  ## Input Field

  The input field has a placeholder text of "Add a new task...". This enables the user to type in their desired task.

  ![Input Field](https://github.com/jtam90/todolist/blob/main/documents/screenshots/input-field-screenshot.png)

  ## Add Task Button

  The "Add Task" button is located under the input field, in the centre. This enables the user to trigger the action of their task being added to a list by either clicking the button, or hitting the enter/return key on their keyboard. The colour of the "Add Task" button changes to a darker shade when it is hovered over.
  Depending on whether it is displayed on a mobile device or whether it is displayed on a tablet/desktop device, it shows up differently. Please see [Bugs](TESTING.md#bugs).

  Mobile:

  ![Add Task Button Mobile](https://github.com/jtam90/todolist/blob/main/documents/screenshots/add-task-button-mobile.png)

  Desktop:

  ![Add Task Button Desktop](https://github.com/jtam90/todolist/blob/main/documents/screenshots/add-task-button-desktop.png)

  ## Task List

  The task list enables the user to have a list of tasks they would like to complete. It includes their added tasks, as well as a checkbox, an edit button and a delete button. 
  Depending on whether it is displayed on a mobile device or whether it is displayed on a tablet/desktop device, it shows up differently.

  Desktop:

  ![Task List Desktop](https://github.com/jtam90/todolist/blob/main/documents/screenshots/task-list-desktop.png)

  Mobile:

  ![Task List Mobile](https://github.com/jtam90/todolist/blob/main/documents/screenshots/task-list-mobile.png)

  ## Checkbox

  The checkbox can be clicked by the user if they have completed the task. Upon clicking the checkbox, the task font will have a strikethrough text decoration for easy readability and user experience.

  ![Checkbox](https://github.com/jtam90/todolist/blob/main/documents/screenshots/checkbox-screenshot.png)

  ## Edit Button

  The edit button allows the user to edit the task. The colour of the edit icon button changes to a darker shade when it is hovered over. Once in edit mode, there is a "save" icon button to enable the user to save their newly edited task. 

  ![Edit Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/edit-button.png)

  ![Edit Field](https://github.com/jtam90/todolist/blob/main/documents/screenshots/edit-field.png)

  ## Delete Button

  The delete button allows the user to delete a task from their list. The colour of the delete icon button changes to a darker shade when it is hovered over. Once the delete button is clicked, an alert will pop up asking the user if they are sure they want to delete the task. The user then has the option of clicking either "Ok" which will then delete the task, or "Cancel" which will prevent the task from being deleted.

  ![Delete Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/delete-button.png)
  
  ![Alert Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/alert-button.png)

  The list of tasks also remains upon the webpage being reloaded.

  ## Technologies Used

- <a href="https://fonts.google.com" target="_blank">Google Fonts</a>:
   - Google Fonts was used for the Alegreya Sans font that is used throughout the site, which was copied into the HTML and CSS code.

- <a href="https://fontawesome.com" target="_blank">Font Awesome</a>:
   - Font Awesome was used for the edit and delete icon buttons.

- <a href="https://balsamiq.com/?gad_source=1&gclid=EAIaIQobChMIiIukqIrWhAMVf9QWBR36KgPkEAAYAiAAEgKzN_D_BwE" target="_blank">Balsamiq</a>:
   - Balsamiq was used to create my wireframes for desktop, tablet and mobile devices.

- Git:
   - Git was used for the version control of the website.

- <a href="https://www.gitpod.io" target="_blank">GitPod</a>
   - GitPod was used as a cloud-based IDE, integrated for collaborative development, complementing Git workflows.

- <a href="https://github.com" target="_blank">Github</a>:
   - Github was used to host the code of the website.

- <a href="https://www.pexels.com" target="_blank">Pexels</a>:
   - Pexels was used for the background image.


## Languages Used

- HTML5
- CSS3
- JavaScript

# Testing

Please refer to [TESTING.md](/TESTING.md) for all testing documentation.

# Deployment

## Git Hub Pages

This project was deployed to GitHub Pages. The steps to deploy to GitHub Pages are as follows:

1. Log into GitHub Pages and find the GitHub Repository.
2. Locate the settings tab at the top of the page and then scroll down the page until you reach the section called Pages, on the left-hand side.
3. Find "Source" and then click on the dropdown menu and select "Main" and save it.
4. The page will automatically refresh.
5. Locate the published live <a href="https://jtam90.github.io/todolist/" target="_blank">link.</a>

## Forking

In order to view and make changes without having an effect on the original repository, we can fork the GitHub Repository.

This is done by the following steps -

1. Log into GitHub.
2. Locate the GitHub Repository.
3. Near the "Settings" button, there is a "Fork" button.
4. Click "Fork" and you will have a copy of the original in your GitHub account.

## Local Deployment

You can also make a local copy of this project by cloning it.

You can do this by typing the following into your terminal: 
- git clone https://jtam90.github.io/todolist/ 

# Credits

## Content

For the basic steps of the To-Do List, the following link was very helpful:

https://hackr.io/blog/how-to-create-a-javascript-to-do-list

## Media

The background image was taken from <a href="https://www.pexels.com" target="_blank">Pexels</a>. 

## Tools

Some other tools used were:

- <a href="https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb" target="_blank">Responsive Viewer</a>
  -This was used to capture images of how my site displays across different devices.

- <a href="https://ui.dev/amiresponsive" target="_blank">Am I Responsive?</a>
  -This was used for my starting image at the beginning of my README.md, displaying my site across different devices in one image.

- <a href="https://chat.openai.com" target="_blank">ChatGPT</a>
  -This was used for help with understanding code on a deeper level, mainly JavaScript, so that I could use it efficiently. It was also very helpful when I had issues with my file paths and deployment problems.

### Acknowledgements

- <a href="https://github.com/RachelFurlong-dev" target="_blank">Rachel Furlong</a> my tutor and cohort leader who has been a wonderful fountain of knowledge and information, offering reassurance and encouragement when needed.
- My friends and family who have not only tested my site and given me honest feedback, but also kept me sane in the process.





