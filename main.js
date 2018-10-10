function Add(...numbers){
    if(numbers == ""){
        return 0;
    }

    var numberCount = 0;
    var result = 0;

    for(var i = 0; i < numbers.length; i++){
        var currentNum = numbers[i];

        if(currentNum.length > 1){
            for(var j = 0; j < currentNum.length; j++){
                if(NewLineAndCommaCheck(currentNum, i, j)){
                    return 0;
                }

                var currentJNum = parseInt(currentNum[j]);

                if(!isNaN(currentJNum)){
                    result += currentJNum;
                    numberCount++;
                }
            }
        }

        else{
            var currentNum = parseInt(numbers[i]);

            if(!isNaN(currentNum)){
                result += currentNum;
                numberCount++;
            }
        }
    }

    if(numberCount <= 0){
	   return 0;
    }

    else{
	   return result;
    }
}

function NewLineAndCommaCheck(currentNum, i, j){
    return (currentNum[j] == "\n" && currentNum[j + 1] == ",") || (currentNum[j + 1] == "\n" && currentNum[j] == ',');
}




for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");

console.log("Step 1 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");

console.log("result: " + Add("")); //should return 0
console.log("result: " + Add(".")); //should return 0
console.log("result: " + Add("1")); //should return 1
console.log("result: " + Add("1, 3")); //should return 4
console.log("result: " + Add("1, , 2")); //should return 3
console.log("result: " + Add("1 2, 3")); //should return 0 
                            //(function should only take 0, 1 or 2 numbers)
for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 2 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("1", "2", "1 2")); //should return 6
console.log("result: " + Add("1", "2", "1 2", "")); //should return 6
console.log("result: " + Add("1", "2", "1 2, 2", "")); //should return 8
console.log("result: " + Add("1", "2", "1 2,., 2", ".")); //should return 8

for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 3 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("1\n1")); //should return 2
console.log("result: " + Add("1\n2, 3")); //should return 6
console.log("result: " + Add("1\n2\n1", "\n", "\n1")); //should return 5
console.log("result: " + Add("1\n,2"));

for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

