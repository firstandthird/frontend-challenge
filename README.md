# First+Third Front End Challenge

Well hello there! 👋

We want to assess your Front End proficiency and we've prepared this little test that should not take you a lot of time (ideally). The challenge is to create a simple newsletter subscription opt-in / opt-out form.

Our goal is to identify your skill level in the following areas:

* Front End concerns
* Code semantics
* Modularity
* Attention to detail
* Performance
* Accessibility

As a general requirement, the module should look good on desktop or mobile sized devices and work properly. There should be at least **five or more newsletters to select**. Doesn't have to be pixel perfect and, you're free to use placeholder text instead of what's on the design. 

To simplify the task, you can simulate that the form takes two seconds to submit and randomly notify that it has been submitted correctly, or that an error has occurred.

## Completion Instructions:

- Initialize a package using either `yarn` or `npm`.
- Install any required pacakges and prepare the code and folder structure however you like.
- _IF_ you are using ES6 or similar code that must be transpiled, add a `build`, `start` or `dev` script to the `package.json`
- Build the form using your chosen code paradigm. You may use ES5/6, React, or Vanilla Javascript, etc. In the README of your response, write a brief description of why you chose to use the stack you did.
- If you are using React:
    - Feel free to use [Create React App](https://github.com/facebook/create-react-app#creating-an-app) to spin up your application. Try to remember to create an initial commit with the base code, and a seperate commit with the customization to seperate code that you have written and customized.
- Test and validate that the code looks and works as expected when it is run.

## Specifications

* If there's no ?email= in the url the form should act as a subscription.
* If there is an ?email= in the url, the form should be pre-populated with the email in the input box and a random selection of newsletters pre-selected.
* Clicking on any part of the newsletter row should select/deselect
* If the unsubscribe checkbox (the one below submit) is checked, all of the inputs should be unchecked. If that checkbox is then unchecked again, the newsletters previously selected should be restored.
* Email must be validated (browser is fine)
* The first time submit is clicked, the the button should be disabled and a timer of two seconds is started. After two seconds an error message above the form should say an error has occurred. The button should be re-enabled.
* On the second submit click, button is disabled, a time of one second starts, and a success message is shown. This should show two different forms of message depending on the initial state of the form AND if the unsubscribe checkbox is checked. Looking for 'You have been subscribed', 'Your preferences have been updated', You have been unsubscribed' (Or similar wording). This should replace the entire form until the page is reloaded.
* If validation passes and theres no error, the data should be posted to http://localhost:3000/newsletter with a json body of { email: <String>, newsletters: <Array>, optOut: <Boolean> } (The response can be ignored, just want to see how a request would be made)

### Some other things to consider

- We would love to see included a simple ReadMe with an explanation of the code, and instructions on how to run and view the app.
- An ideal solution would provide a way to load a development server that will serve the solution directly to a browser.
- Please use webpack as a code compiler / transpiler.
- Ideally, the final deliverable will work without any additional input. There should be dummy data wired into the module that _could_ be replaced with an API endpoint and the form submission should indicate success or failure. Think of it as you are passing a finished product along to be UAT'd and code reviewed.

The base composition is shown below and can be found in the `assets` folder, along with the original Sketch file.

![Composition](/assets/composition.png)

*Good Luck!* And remember to have fun!.