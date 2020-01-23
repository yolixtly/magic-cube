# Magic Cube

### Html, CSS and Javascript Code Challenge

#### Overview:

Build Site based on mockup using semantic HTML and cross-browser compatible CSS.

Visit app: https://nifty-volhard-940571.netlify.com

Used frontend Libraries:

-   Less
-   Jquery

Development Notes:

In order to complete this challenge I broke the application into milestones.

### Milestone 1: Scaffold Layout with CSS Flexbox

My first approach was to build a static layout to guarantee a responsive design with plain CSS.
I opt to focus on flexbox css because I find it to be a comprehensive tool to quickly
get a clean design. The focus here was to get the header, the footer and the cards representing
the sections of the body with dummy data.

### Milestone 2: Donation Form Card

For this section the first goal was to pseudo code the different workflows that this simply
form imples for a great user experience. I created a simple state object to keep track
of the donations. This state contains the amount raised,
the number of donors and the target donation. For dom manipulation I used Jquery library
to manage the state of the donation.

The biggest challenge here was to effectively display the tooltip and toast messages after donation was confirmed.

### Milestore 3: Accordion and Tabs cards

I deliverately used the Javascript Web API instead of Jquery, simply
to demonstrate a different approach for dom manipulation.

This was probably the most fun and easy part of the process. The technique used to
keep 1 panel open at a time was to start by cleaning the active and show classes and
finally set those classes for the selected item in both the accordion and tabs group.

### Milestone 4: Ajax Call to Weather API

The highlight of this section consist in the use of an async called with the Jquery API.
Notice also how the buttons all through the application, share similar classes to improve
code reusability.

### Milestone 5: Deployment through Netlify

To Present this project. I have deployed it to Netlify in the following url: https://nifty-volhard-940571.netlify.com
