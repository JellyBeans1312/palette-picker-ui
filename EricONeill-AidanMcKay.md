# Palette Picker Submission Form

 [Project Spec](http://frontend.turing.io/projects/palette-picker.html)

 # Basics

 #### Link to the GitHub Repository for the BE
[palette-picker BE](https://github.com/JellyBeans1312/palette-picker-be)

 #### Link to the Deployed BE
[heroku BE](https://palette-picker-be-eo-am.herokuapp.com/api/v1/projects)

 #### Link to the GitHub Repository for the FE
[palette-picker FE](https://github.com/hlhartley/palette-picker)

 #### Link to the Deployed FE
[heroku FE](https://palit-picker.herokuapp.com/)

 ## Completion

 #### Were you able to complete the base functionality?

 Yes we were able to complete the base functionality

 #### Link to an image of your wireframe(s)
- On GitHub FE repository

 #### Which extensions, if any, did you complete?
 
 - N/A

 # Code Quality

 #### Link to a specific block of your code on GitHub (from either repository) that you are proud of
[happy code](https://github.com/hlhartley/palette-picker/blob/master/src/containers/PaletteControls/PaletteControls.js)

 * Why were you proud of this piece of code?  
- Lines 30-47: generateRandomColors function. We completely refactored this function, scaled it down, and made it more efficient. We originally generated 5 random colors; however, we didn't account for locking the colors and then being able to generate additional colors to push into that array. We also had to completely restructure our data, and add a isLocked (value = bool) property.

 #### Link to a specific block of your code on GitHub that you feel not great about
[sad code](https://github.com/hlhartley/palette-picker/blob/master/src/containers/ProjectCard/ProjectCard.js)

 * Why do you feel not awesome about the code? What challenges did you face trying to write/refactor it?
- Lines 17-31: handleDeleteColors function. This function handles a lot. To refactor, we could have made it into a thunk and/or broken it our into separate functions.

 #### Link to Design Inspiration

 * Show us what you used as design inspiration (another color picker site, a dribbble UI element, a user flow, etc.) and explain what you stole from it  
[design inspiration](https://dribbble.com/shots/6229834-Language-learning-iOS-app)    
- We stole the design of the button(s). The color of the buttons really stand out and it looks really fun and modern which is the theme of our paLit picker app.

 #### Reflection on New Concepts

 * Describe your thoughts on server-side testing  
- It is still a bit unfamiliar, yet it seems worthwhile and not as difficult as some front-end tests can be.
* Describe your thoughts on TravisCI  
- Once you know how to set it up, it's not too difficult to use. The only drawback is that it is extremely slow and you have to wait for it to finish. TravisCI could be really useful for Continuous Integration and making sure that there are no bugs before the changes are deployed to your app.
* Describe your thoughts in creating a single project whose codebase was distributed across multiple repositories
- It was easier to organize and break it out into FE and BE repositories - yet have the two connected.
#### Please feel free to ask any other questions or make any other statements below!

 Anything else you wanna say!

 -----


 # Instructor Feedback (Instructor Name)

 ## Specification Adherence

 **x score**: 

 ## User Interface

 **x score**: 

 ## Testing

 **x score**: 

 ## Workflow

 **x score**: 

 # Outcome: pass/fail