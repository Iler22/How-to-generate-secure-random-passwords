# How-to-generate-secure-random-passwords

The aim of this project was to allow users to generate a random password once certain criteria is meet.

To achieve this the following steps were taken:

A button is saved within the HTML file using an id of #generate and a password is saved using the id of #password.

Variables were stored as strings using numbers, lowercase alphabet, uppercase alphabet and symbols under a generate password function. A password and a tempPassword were also saved as empty variable strings.

A prompt was then created asking users to choose a password length between 8 to 128. Two conditional statements were then logged to check that the value inserted in the prompt is a number between 8 and 128. If the user tries to use anything other than a number and if the number chosen for the generated password is less than 8 or greater than 128, an alert will be triggered requesting the user to add a valid number between 8 to 128. 

Once a user selects a valid number, they are asked to confirm whether they wish their passowrd to contain numbers, lowercase alphabet, uppercase alphabet or symbols. If one of these options are not confirmed, then an alert pops up asking the user to confirm one of the options previously listed.

If a user selects at least one of the four options, it is then called as a function with a random number, lower alphabet, upper alphabet or symbol based on the length of each variable and the said variable(s) are returned and assigned to the tempPassword variable string. The tempPassword is then reassigned to the password variable string using a for statement and the event listener allows generates the passord once the password length and one of the options have been selected.

Please see screenshot of live project and link a link to my application.

![2021-11-07](https://user-images.githubusercontent.com/89151536/140659689-bdaf62c7-bb3b-4084-aa9c-9a5a80b121d4.png)
