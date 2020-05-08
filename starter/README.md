## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
-  modified this line in the conf.js file 'const SpecReporter = require('jasmine-spec-reporter').SpecReporter;' so i could run the test 

## Description
- run test: `protractor conf.js`

## Explanation
- I located the elements by id, data-automation-id and tagname 
- For the last step, where i should've deleted the folder, i opted to create the id for the Delete button, by concatenating the text 'action_menu_right_' with the index of the row containing the name of my folder.
So in order to do that, i located the element row with element(by.css('[aria-label="Cristina"]'), got the whole attribute and extracted the index.