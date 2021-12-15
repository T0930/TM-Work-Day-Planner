
# Homework 5: Work Day Planner

## NOTE: Please see Day Planner containing the following:

* Current Day and Time are displayed at the top of the planner.
* Day Planner is set between the hours of 8:00AM-4:00PM (Standard Business Hours).
* Each timeblock is set to remain as 'present' for a hour provided the actual time falls within the set parameters. See Example Below:
* Example for 8:00am 'Present': (currentTime > '0759' && currentTime <= '0859')
* Code utilizes 24-Hour time to prevent confusion when running code to check time values.
* Code has implemented momentjs to log the current time and use it as a variable. 
* Application displays timeblocks as 'past', 'present', and 'future' based off of the current time.
* Timeblocks are color coded "red" for "present", "green" for "future", and "gray" for past".
* Users can click into a timeblock to enter text and can click the save button to save the input to local storage.
* When the page is refreshed, the saved events persist.
* Added a reset button to top of page to clear local storage which deletes all entries and refreshes the page.
* Added @media to allow application to run on smaller viewports.

## IMPORTANT:  If current time is before 8:00am all fields will show "green" for "present".
## IMPORTANT:  If current time is after 5:00pm all fields will show "gray" for "past".
## IMPORTANT:  See 'currentTime' variable in js file for manual manipulation of time if viewing application before 8am and after 5pm.

# Screen Shot:  
Will Update

# Deployed Website:
[TM-Work-Day-Planner](https://t0930.github.io/TM-Work-Day-Planner/)