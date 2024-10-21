# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Homepage on Desktop](/screenshots/Homepage_Desktop.PNG)
![Homepage on Tablet](/screenshots/Homepage_Tablet.PNG)
![Homepage on Mobile](/screenshots/Homepage_Mobile.PNG)
![Destination on Desktop](/screenshots/Destination_Desktop.PNG)
![Destination on Mobile](/screenshots/Destination_Mobile.PNG)
![Crew on Tablet](/screenshots/Crew_Tablet.PNG)
![Technology on Mobile](/screenshots/Technology_Mobile.PNG)

### Links

- Solution URL: [My Multi-page Space Tourism Website Repo](https://github.com/Jaime-Cont/space-tourism-website)
- Live Site URL: [My Multi-page Space Tourism Website hosted by Github Pages](https://jaime-cont.github.io/space-tourism-website/)

## My process

- I started off by plotting down all the basic HTML Elements, setting up the main element, sections and divs that I deemed necessary to accomplish the challened.
- I proceeded to initialize my CSS Variables for easier color application and setting the main font size and weight, all according to the challenge's specifications incorporating mobile first.
- I also had access to the figma file so I setup the font-styles, text-presets so it was reusable, and then changed them accordingly using media query.
- I would work on HTML and CSS in an alternating matter to match the output, until I was satisfied with the front end side of things.
- I then proceeded to work on JavaScript, initializing a var connected to all the elements I want the script to affect
- I then worked on fetching the data from the data.json file to be used for when changing the information on the page, so it only has a single page instead of multiple crew pages for example
- Worked on media query on Tablet after I was happy with Mobile, then later moved to Desktop
- Trial and Error till I got the output I was looking for.

### Built with

- HTML
- CSS
- JavaScript
- Responsive Media Queries
- Flexbox
- Mobile-first workflow
- JavaScript Object Notation (JSON)

### What I learned

- I'm happy to be improving and noticing that I work better now compared to my older projects, I'm faster at thinking of what I need to include and how to implement them to provide the correct output.
- I got to practice more on multiple css elements, like using the ::after, :not, :ntn-child, etc.
- The main thing I did that I'm glad I learned while making this challenge is how to fetch data from JSON files, its really helpful especially when you want to display data on a page that changes, so instead of making multiple html pages I can just have one and basically cycle through the different data.

```js
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    /* WHAT TO DO WITH DATA */
  });
```

### Continued development

If I were to continue development on this website I would put in more pages that could fit in with the tourism website feel, maybe a booking system? a registration for an account? and probably more planets cause I like space!

### Useful resources

- [Text Hover Effect with Animation](https://codepen.io/anon/pen/emNjGo) - This helped me learn how to make a hover effect with a transition from middle to max width towards the left and right which can be seen in the navbar in tablet and desktop.
- [Fetch API for fetching data from JSON file](https://www.w3schools.com/jsref/api_fetch.asp) - The API I used to fetch data from data.json which helped enormously!

## Author

- Github - [Jaime Contemprato](https://github.com/Jaime-Cont)
- Frontend Mentor - [@Jaime-Cont](https://www.frontendmentor.io/profile/Jaime-Cont)
- LinkedIn - [Jaime Contemprato](https://www.linkedin.com/in/jm-contemprato/)
