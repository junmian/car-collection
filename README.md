# Car Collection

## Overview
This is a single interactive informational webpage that provides users with a selection of cars to learn more about.

The webpage has two areas: 
1.	**User Interface** – A selection of four vehicles that the user can interact with. 
2.	**Display Area** – When the user selects a vehicle, information about it is displayed here. 

The minimalist design helps to accentuate the main feature of this webpage: a light and dark dual-mode color scheme. The webpage is automatically set to light/dark mode based on the user’s device settings. For example, on a Windows operating system, go to Settings --> Personalization --> Colors --> choose/toggle between light and dark default app mode to see effect. 

## Main Feature
-	Light mode and dark mode, set by the user’s device settings. 

Light Mode                 |  Dark Mode
:-------------------------:|:-------------------------:
<img src="https://gitlab.com/junmian/car-collection/-/raw/main/img/light-mode.jpg" alt="Light Mode" title="Light Mode" target="_blank"> | <img src="https://gitlab.com/junmian/car-collection/-/raw/main/img/dark-mode.jpg" alt="Dark Mode" title="Dark Mode" target="_blank">

## Accessibility
The webpage is designed and coded to be WCAG 2.0 Level AA compliant. Text contrast also meets Level AAA. I used a web accessibility evaluation tool to double check my work for accuracy.

## Responsiveness
The webpage is fully responsive, utilizing grid layout to resize at different breakpoints. 

## Technologies Used
-	HTML
-	CSS
-	Bootstrap
-	jQuery 

## Why jQuery?
-	I opted to use this opportunity to apply jQuery, as opposed to plain JavaScript and the Fetch API, so that I learn how to work with legacy technology to support legacy projects that may still run on an older JavaScript library. 

## CSS Custom Properties 
-	I also used this opportunity to practice applying custom CSS properties. The dual-color mode fits the use case for applying custom properties, which allow a value to be stored in one place and referenced in two places (i.e., one for light mode and one for dark mode). This brings a bit of variable usage to CSS. 

## Version Control
-	GitLab 
