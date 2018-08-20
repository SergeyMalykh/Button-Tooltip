# Live

You can preview this project at <a href="https://sergeymalykh.github.io/Button-Tooltip/" target="_blank">Button-Tooltip preview</a>.

# Task requirements / (Objective)
Create a single page Angular 4+ app with simple routing that has one state/view. 
In it, place two buttons that when clicked; show a tooltip above the button with some text in it. 
When button A is clicked, if button B’s tooltip is open it should close and vice versa - only one tooltip should be visible at a time. 
Either tooltip should close when clicked anywhere outside of it, but remain open if clicked inside. Either tooltip should close when ESC key is pressed.

# Implementation

Tooltip functionality should be written as a reusable component
You are encouraged to use a starter/seed project to save time scaffolding 
You can organize the files/folders in any way
The reviewer should be able to run your solution with a simple npm command
You should submit your solution as a github repository link

# Bonus

If you scroll down to an open tooltip it should detect being at the edge of the screen and change position to be below the button +++<strong> (Please test it, its working)</strong>

Style using Bootstrap sass ++ <strong>(all styles are done in SCSS. Its next generation of sass)</strong>

Add at least one accessibility feature + <strong>(Control Tab Order in HTML nevigated by tabindex between buttons; Press the <kbd>ALT+1-4</kbd> keys to click the button)</strong>

# Tooltip

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
