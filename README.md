# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAFISA TANTA**

Time spent: **#10** hours spent in total

Link to project: (https://lightnsoundgame.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

* [y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [y] Game buttons each light up and play a sound when clicked. 
* [y] Computer plays back sequence of clues including sound and visual cue for each button
* [y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [y] User wins the game after guessing a complete pattern
* [y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [n] More than 4 functional game buttons
* [n] Playback speeds up on each turn
* [n] Computer picks a different pattern each time the game is played
* [n] Player only loses after 3 mistakes (instead of on the first mistake)
* [y] Game button appearance change goes beyond color (e.g. add an image)
* [n] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [n] User has a limited amount of time to enter their guess on each turn


The following **additional** features are implemented:

- [y] Added a slideshow on the homepage to make it prettier
- [y] Implemented a basic animation to the slideshow 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![gif for victory](https://cdn.glitch.com/983b4f97-0712-483a-8776-d01002ac5f61%2Flightnsoundgame.gif?v=1616395343475)
![gif for lose](https://cdn.glitch.com/983b4f97-0712-483a-8776-d01002ac5f61%2Flightnsoundgame2.gif?v=1616395391294)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For help with formatting I reffered to w3schools (www.w3schools.com) and tutorialspoint (www.tutorialspoint.com)]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The first major challenge that I faced was adding more buttons and assigning frequencies to them. For some reason, in const freqMap,
under "Sound Synthesis Functions", when I tried to implement buttons 5 and 6, it gave me an error, even though I implemented the buttons
in the "index.html" and "style.css" files. Unfortunately, I was unable to resolve the issue, despite following the proper protocols, and
ultimately went with a different game design.
The second major challenge that I faced in this project was making the game buttons visible only after the start button is clicked. To do this
I initially created another file called "game.html" and additional functions for the start and stop buttons such that when the start
button is clicked, the page goes to "game.html" and when the stop button is clicked, it goes back to "index.html". However, by doing so
the playClueSequence() function stopped working.
Furthermore, I added two more functions for the onclick eventListeners for start and stop game buttons to avoid having to modify the 
functions, however, that did not work either.
So finally, I added the "gameButtonArea" id to the "hidden" class and modified the start and stop game functions in script.js accordingly
and then the issue was resolved.
Lastly, the final major challenge that I faced was implementing the code for the game logic. It took me some time to become accustomed to the
different variables and how they are related to one another in the game. Figuring out those connections and then using it in terms of the 
game's logic was my final hurdle. However, since JavaScript is kind of similar to C++, I was able to make the logic work through if and else
statments.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[One thing I learned doing this project was that the basic structure of most websites are the same. By creating many different html files,
we can add more options and features into the website. However, it made me wonder how it all would work with multiple css and/or javascript
files. Also, how could I implement code written in either python or C++ (the programming languages I know) in these files. For example, if I
consider FaceBook, the website can be replicated in it's basic structure using HTML, CSS and JavaScript. However, if I were to create accounts,
which can be thought of as "objects", which can be programmed in .h and .cc files, how would I connect those files to the HTML, CSS, and JS
files? On the same note, I learnt how to make the user interface for creating a new account in a previous internship, however, I wondered, how
do I ensure that when I click the save button, the information provided by the user is saved into the website? These are some of the gaps that 
I have in this field, which I wish to b answered. If given the opportunity, I believe that this internship will give me the tools to figure out 
the answers myself.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[Initially, I wanted to make a virtual "Anatomy Jane" game, where the buttons are the different organs of the human body. However, I struggled
with aligning the buttons with the picture, and the implementation of more than 4 buttons (like I previously mentioned). The idea was, instead
of a pop up message or alert box, there would be a pop up image of a doctor explaining the game to the player. Then, the game would have a layout
where the buttons are on top of the image of the human body. Then, according to the question prompt, the user would answer by selecting the correct
button(s). Furthermore, I would have implemented levels to the game as well. Such that which each level, the game gets harder. I would have also
liked to add my own designs as part of the project, but due to lack of time and skills, I could not perform either. However, one last thing that I 
could have done was to add an animation for raining confetti if the player won the game. But from the sources that I relied on, I understood that I
had to either create a new javascript file for the confetti animation or implement several functions to control each aspect of the confetti. I that
I would have been able to do this if I had more time.]



## License

    Copyright [NAFISA TANTA]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.