# palindrome-in-file-finder
Find line by line palindrome from large file

INTRODUCTION

This is a basic file streaming script.
It creates a reading streams on txt input file given in ./input-files folder
and pipeout streamdata line by line to static method of class which finds palindrome
word(s) and occurances.

HOW TO RUN 

1. After unziping the palindrome-finder, open terminal and go to palindrome-finder
   folder path from terminal
2. write command in terminal as
   node fileReader.js

FEW ASSUMPTIONS & NOTES

1. Word with more than two character is need to be check for palindrome(case-insensative)
   e.g. Nitin is a boy. - In this statement 'Nitin' is palindrome but 
   article 'a' is not treated as palindrome. 
2. As it is a basic version script, it takes input files from input folder 
   It has improvement scope, to take file path from user as a input.
3. Script prints the output on terminal/stdio REPL prompt ,has improvement scope
   to pipeout results to another output file.
4. If there is no content or spaces as content on any line in input file, For 
   such cases, I'v console logged the edge case messages on terminal, if thats 
   not required, pls comment the  line 102 in fileReader.js file for better 
   output reading experience on terminal.
5. Added sanitised line to output for palindrome verification purpose,It can be 
   commented out at line 113 in fileReader.js file. 
6. Theres scope of improvement, to paramaterised the methods for what user wants 
   to print/output viz. {lineNumber:true/false, line:true/false}.