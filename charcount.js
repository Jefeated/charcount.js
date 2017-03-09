var countLetters = function(userinput){
//var userinput1 = userinput.split(" ").join('');
var output = {};

for (var i = 0; i < userinput.length; i++){
  var character = userinput[i];
     if (character === " "){
        continue;
    }
    if (output[character]) {
      output[character] = output[character] + 1;
    }

    else {
      output[character] = 1;
  }
}
return output;
};

console.log(countLetters("lighthouse in the house"));
