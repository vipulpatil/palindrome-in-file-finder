/**
 * @description Basic script to find  line  by line occurances of palindrome 
 * words in a file.
 * @author Vipul Patil <vipul.bigbadguy@rediffmail.com>
 */

const fs = require('fs');
const readline = require('readline');

const { isPalindrome, removeWhiteSpaceFromArray, removePunctuationMarks,
    nestArrToFlatObject
} = require('./util');

const inputFile = 'input.txt';

/**
 * @class FileReader streams file line by line 
 */
class FileReader {
    /**
     *Creates an instance of FileReader.
     * @memberof FileReader
     */
    constructor() {

    }
    /**
     *
     * @static
     * @param {string} line - streamed line from file
     * @param {number} lineCounter - line number
     * @returns {object} { line,sortedPalindromes,lineNumber }
     * @memberof FileReader
     */
    static processLine(line, lineCounter) {
        let palindromeCounterMap = {};
        /** 
        * remove punctuation marks to handle case(s) like palindrome word with 
        * fullstop or comma e.g. My name is Nitin, I speaks Malayalam.
       */
        line = removePunctuationMarks(line);
        let wordsInLineArr = removeWhiteSpaceFromArray(line.split(' '));
        if (wordsInLineArr.length) {
            wordsInLineArr.map((eachWord) => {
                eachWord = eachWord.toLowerCase();
                if (isPalindrome(eachWord.toLowerCase())) {
                    // to avoid single character word viz. 'a' 
                    if (eachWord.length > 1) {
                        // update occurance of palindrome number
                        palindromeCounterMap[eachWord]=
                            palindromeCounterMap[eachWord] ?
                                palindromeCounterMap[eachWord] + 1 : 1;
                    }
                } else {
                    //console.log('Not a Palindrome----',eachWord);
                }
            })
            let sortedPalindromes = [];
            //convert object to nested array for sorting purpose
            for (let paldrm in palindromeCounterMap) {
                sortedPalindromes.push([paldrm, palindromeCounterMap[paldrm]]);
            }
            sortedPalindromes.sort(function (a, b) {
                return b[1] - a[1];
            });
            return {
                lineNumber: lineCounter,
                line,
                sortedPalindromes
            }
        } else {
            console.log('\nLine No. ', lineCounter, ' has only empty spaces' +
                ' and/or special characters as content');
            return {
                lineNumber: lineCounter,
                sortedPalindromes: null,
                line
            }
        }
    }

    /**
     *
     *
     * @memberof FileReader
     */
    streatFile() {
        let lineCounter = 0;
        let fileStream = fs.createReadStream('./input-files/input.txt');
        let rd = readline.createInterface({
            input: fileStream,
        });

        rd.on('line', function (line) {
            lineCounter = lineCounter + 1;
            console.log('\n\n **********************************');
            if (!line) { // \n newline is there but with out any content
                console.log('\n Line No. ', lineCounter, ' has no content to process');
            } else {
                let result = FileReader.processLine(line, lineCounter);
                console.log('Line Number: ', result.lineNumber);
                console.log('Sanitised Line: ',result.line);
                (result.sortedPalindromes) ?
                    console.log('Palindrome(s): ', nestArrToFlatObject(result.sortedPalindromes))
                    : console.log('Palindrome(s): No Palindrome in here bro.');
            }
        });
    }
}

let FileReaderIn = new FileReader();
FileReaderIn.streatFile();
