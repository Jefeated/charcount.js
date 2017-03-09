var countLetters = function(userinput){
var output = {};

for (var i = 0; i < userinput.length; i++){
  var character = userinput[i];
     if (character === " "){
        continue;
      }
        else if (!output.hasOwnProperty(character)){
          output[character] =[i];
        }
        else {
          output[character].push(i);
        }

    }
    //if (output[character]) {
    //output[character] = output[character] + 1;
    // }
    // else {
    //   output[character] = 1;
//   }
//}

return output;
}

console.log(countLetters("lighthouse in the house"));
