<h1 align="center">PASSWORD GENERATOR</h1>

<p align="center">A simple password generator that can be deployed however you want, works in several ways being explained below</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features
[//]: # (Add the features of your project here:)
This app features all the latest tools and practices in mobile development!

- <img src="./js.jpg" alt="License MIT" width="20px"> **Javascript** — Easy to use so you can deploy to other systems

## Getting started // How to use

Download the code and implements in your code!

You can perform the genPass() function, with these possible arguments:
- **(size)** : you can generate a password using downcase characters with a size that you can choose from;
<br>

- **(size, Array)** : you can generate a password using the characters you choose, passing an array of booleans with the first value for downcase letters, the second for uppercase, the third for numbers, and the fourth for special characters, being random depending on the required size;
<br>

- **(Array, Array)** : The first array works as follows: you can pass letters in a string to get specific caracters such as ***"d"*** for downcase, ***"u"*** for uppercase, ***"n"*** for numbers, ***"s"*** for symbols and ***"r"*** for random, if you want a specific item that won't change just start the string with the simbolo ***"-"*** and continue your array normally,   the second array works exactly like the previous function;

> ***Exemple 1:*** *console.log(genPass(10)); //dxknajbgku*

> ***Exemple 2:*** *console.log(genPass(20, [true, true, true, false])); //Vrof7EMTrERyGLBrLNyX*

> ***Exemple 3:*** *console.log(genPass(["uuuddd", "-@", "nnn"], [true, true, true, false])); //FFXrar@273*

## License

This project is licensed under the MIT License - see the **[LICENSE](https://opensource.org/licenses/MIT)** page for details.