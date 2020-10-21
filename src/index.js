module.exports = function toReadable (number) {
    const unitsOne = {
        "0": 'zero',
        "1": 'one',
        "2": 'two',
        "3": 'three',
        "4": 'four',
        "5": 'five',
        "6": 'six',
        "7": 'seven',
        "8": 'eight',
        "9": 'nine',
      };
      
      const unitsTwo = {
        "0": 'ten',
        "1": 'eleven',
        "2": 'twelve',
        "3": 'thirteen',
        "4": 'fourteen',
        "5": 'fifteen',
        "6": 'sixteen',
        "7": 'seventeen',
        "8": 'eighteen',
        "9": 'nineteen',
      };
      const tenth = {        
        "2": 'twenty',
        "3": 'thirty',
        "4": 'forty',
        "5": 'fifty',
        "6": 'sixty',
        "7": 'seventy',
        "8": 'eighty',
        "9": 'ninety',
      }

    var message = '';

    var str = String(number);
    str = str.split('');

if (str.length == 1) {
  message = unitsOne[str];
}
else if (str.length == 2) {
  if (str[0] === '1') {
    message = unitsTwo[str[1]];
  }
  else if (str[1] === '0') {
    message = tenth[str[0]];
  }
  else {
    message = tenth[str[0]] + ' ' + unitsOne[str[1]];
  }
}
else {
  if (str[1] === '1') {
    message = unitsOne[str[0]] + ' ' + 'hundred' + ' ' + unitsTwo[str[2]];
  }
  else if (str[1] === '0' && str[2] === '0') {
    message = unitsOne[str[0]] + ' ' + 'hundred';
  }
  else if (str[1] === '0') {
    message = unitsOne[str[0]] + ' ' + 'hundred' + ' ' + unitsOne[str[2]];
  } 
  else if (str[2] === '0') {
    message = unitsOne[str[0]] + ' ' + 'hundred' + ' ' + tenth[str[1]];
  }
  else {
    message = unitsOne[str[0]] + ' ' + 'hundred' + ' ' + tenth[str[1]] + ' ' + unitsOne[str[2]];
  }
}
return message;
}
