const { teardown } = require("mocha");

module.exports = function toReadable (number) {
    let n = number;
    let ten = Math.floor((n - (Math.floor(n / 100)) * 100) / 10);
    let dec = n - ((Math.floor(n / 10)) * 10);
    let delZer = (n - (Math.floor(n / 100)) * 100) / 10;
    let XAXA = (n % 100) - 10;

     if (n === 0) {
      return "zero";
    } else if(n < 10) {
      return ['', 'one','two','three','four','five','six','seven','eight','nine'][n];
    } else if(n < 20) {
      return ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'][n - 10];
    } else if(n < 100) {
      return `${['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'][Math.floor(n / 10)]}${['', ' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'][Math.floor(n % 10)]}`;
     } else if(n <= 999 && n % 10 === 0) {
        return `${['', 'one','two','three','four','five','six','seven','eight','nine'][Math.floor(n / 100)]} hundred${['', ' ten',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'][delZer]}`;
     } else if(n >= 111 && n <= 919 && (n % 100) < 20 && (n % 100) > 10) {
        return `${['', 'one','two','three','four','five','six','seven','eight','nine'][Math.floor(n / 100)]} hundred${[' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'][XAXA]}`;
    } else if(n <= 999) {
    return `${['', 'one','two','three','four','five','six','seven','eight','nine'][Math.floor(n / 100)]} hundred${['', '',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'][ten]} ${['','one','two','three','four','five','six','seven','eight','nine'][dec]}`;
    } 
    return n;
    }


