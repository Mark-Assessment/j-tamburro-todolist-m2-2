# Testing

## Testing User Stories 
### User Experience (UX)

**I would like to be able to have a simple application that allows me to add a list of tasks that I would like to complete.
- The user is presented with a simple, clear and easy to navigate To-Do List application.

![To-Do List Application](https://github.com/jtam90/todolist/blob/main/documents/screenshots/todolist-application.png)


**I would like to be able to check the tasks off as they are completed.
- The user has the use of a checkbox, which strikes through a task once clicked.

![Checkbox](https://github.com/jtam90/todolist/blob/main/documents/screenshots/checkbox-screenshot.png
)

**I would like to be able to edit tasks, so that I can change the wording.
- The user has the option of editing tasks and saving them to the current list.

![Edit Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/edit-button.png)
![Edit](https://github.com/jtam90/todolist/blob/main/documents/screenshots/edit-field.png)


**I would like to be able to delete tasks and for an alert to pop up incase the delete button is clicked accidentally.
- The user has the option of deleting tasks, as well as an alert popping up when the button is clicked.

![Delete Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/delete-button.png)
![Alert Button](https://github.com/jtam90/todolist/blob/main/documents/screenshots/alert-button.png
)

**I would like to be able to store my list so that when the webpage is reloaded, I can still see my completed and/or outstanding tasks.
- The user has the option of the task list remaining upon the webpage being reloaded.

![Reload List](https://github.com/jtam90/todolist/blob/main/documents/screenshots/reload-list.png)

## User Feedback

Friends and family have tested my website on different devices and browsers. The feedback that I have received is that it is clear, easy to navigate, clean and functional as well as responsive. All buttons also work.

## Automated Testing vs Manual Testing

- Automated Testing using Jest is a form of testing framework that can be implemented into the JavaScript code. It runs alongside the development process meaning that the code is being automatically tested for errors and bugs along the way to ensure that it is functional and clean and behaving as expected.

- Manual Testing using either JSLint or JSHint is a form of manual testing by the developer. The testing can be completed during the development process in order to catch any problems early, or it can be completed at the end of the development process, although this could take up further time. The testing through JSLint/JSHint is completed by copying the JavaScript code into the linter and receiving the results as to whether the code has passed through the testing process or if there are bugs and errors present.

# Testing for Milestone 2

Although both Jest and JSLint/JSHint are essential for JavaScript development at different stages, in this project I have decided to run my tests through a linter, JSHint. 
In a day-to-day development situation, I can fully acknowledge why Jest would be used, as it makes the development process much smoother running, and enables good time management with the testing process being carried out in the background automatically.
For this project, I have not had the time-scale in the project window to set this up properly, so I have opted for manual testing on this occasion.

## Online Validation Sites

I have tested my website by running my HTML, CSS and JavaScript through the following online validation sites:

- The W3C MarkUp Validation Service
- The W3C CSS Validation Service - Jigsaw
- JSHint

## Online Validation Results

- W3C MarkUp Validation Service

The HTML code initially received just one error:

![W3C Error](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/htmlerror.png)

I fixed this error by changing the HTML code:

![W3C Error Fix](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/htmlcorrection.png)

The HTML then passed the tests:

![W3C Pass](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/htmlpass.png)


- The W3C CSS Validation Service - Jigsaw

The CSS code passed all tests without any bugs or errors:

![W3C CSS Pass](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/csspass.png)


- JSHint

The JavaScript code passed all tests without any bugs or errors:

![JSHint Pass](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/jshint.png)


## Performance Results

I ran my site through Lighthouse and received the following results for both mobile and desktop devices:

Desktop -

![Lighthouse Desktop](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/lighthouse-desktop.png)

Mobile -

![Lighthouse Mobile](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/lighthouse-mobile.png)


# Browser Testing

I checked my site on three different browsers and achieved the same result for all:

Google Chrome:

![Google Chrome](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/google-chrome.png)

Microsoft Edge:

![Microsoft Edge](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/microsoft-edge.png)

Brave:

![Brave](https://github.com/jtam90/todolist/blob/main/documents/screenshots/testing%20screenshots/brave.png)

## Bugs

The only bug throughout this project that I have struggled with was to get the site properly displayed on some screens via a mobile device. I tried very hard to alter the CSS to resize things so that it looked identical or as close to identical as possible in comparison with tablet and desktop devices but could not get it to work. 

![Bug]()


