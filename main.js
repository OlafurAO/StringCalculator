function Add(...numbers){
    if(numbers == ""){
        return 0;
    }

    try{
        return Calculations(numbers);
    }

    catch(error){
        return "Negatives not allowed: " + FindNegativeNumbers(numbers);
    }
}

function Calculations(numbers){
    var numberCount = 0;
    var result = 0;

    for(var i = 0; i < numbers.length; i++){
        var currentNum = numbers[i];
        var delimeter = '';

        if(currentNum.length > 1){
            if(currentNum[0] == '/' && currentNum[1] == '/'){
                if(currentNum[3] == '\n'){
                    delimeter = currentNum[2];
                }
            }

            currentNum = currentNum.replace(/\n/g,",");

            for(var j = 0; j < currentNum.length; j++){
                if(currentNum[j] == '-'){
                    if(!isNaN(parseInt(currentNum[j + 1]))){
                        throw "";
                    }
                }

                if(NewLineAndCommaCheck(currentNum, i, j)){
                    return 0;
                }
            
                var currentJNum = parseInt(currentNum[j]);
                var nextJNum = parseInt(currentNum[j + 1]);

                if(!(currentNum[j] == '\n' || currentNum[j] == ',' || currentNum[j] == ' ' || !isNaN(parseInt(currentNum[j])))){
                    if(delimeter == ''){
                        return 0;
                    }
                }

                if(!isNaN(currentJNum)){   
                    for(var k = j + 1; k < currentNum.length; k++){
                        if(!isNaN(currentNum[k])){
                            currentJNum = "" + currentJNum + currentNum[k];
                            j++;
                        }

                        else{
                            break;
                        }
                    }

                    if(currentJNum > 1000){
                        currentJNum = 0;
                    }
                    
                    result += parseInt(currentJNum);
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

function FindNegativeNumbers(numbers){
    var numList = [];

    for(var i = 0; i < numbers.length; i++){
        var currentNum = numbers[i];

        if(currentNum.length > 1){
            for(var j = 0; j < currentNum.length; j++){
                //console.log(currentNum[j]);
                if(currentNum[j] == '-' && !isNaN(parseInt(currentNum[j + 1]))){
                    numList.push("-" + currentNum[j + 1]);
                }
            }
        }
    }

    return numList;
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
console.log("result: " + Add("")); //should return 0
console.log("result: " + Add("1")); //should return 1
console.log("result: " + Add("1, 3")); //should return 4
console.log("result: " + Add("1, 2")); //should return 3
console.log("result: " + Add("12, 2")); //should return 14)
console.log("result: " + Add("1, 2, 3")); //should return 0 (changed in step 2)
                        
for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 2 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("1", "2", "1, 2")); //should return 6
console.log("result: " + Add("1", "2", "1, 2", "")); //should return 6
console.log("result: " + Add("1", "2", "1, 2, 2", "")); //should return 8
console.log("result: " + Add("1", "2", "1, 2,")); //should return 6

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
//console.log("result: " + Add("1\n,2")); //should return 0

for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 4 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("-1")); //should return error
console.log("result: " + Add("-1 -2")); //should return error
console.log("result: " + Add("-1", "-2")); //should return error
console.log("result: " + Add("-1", "2")); //should return error
console.log("result: " + Add("1", "2")); //should return 3


for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 5 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("1001,2")); //should return 2
console.log("result: " + Add("21")); //should return 21
console.log("result: " + Add("1000", "2")); //should return 1002
console.log("result: " + Add("1000", "2")); //should return 102

for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

console.log("Step 6 Test");

for(var i = 0; i < 30; i ++){
    process.stdout.write("=");
}

console.log("");
console.log("result: " + Add("//;\n1;2\n2")); //should return 5

for(var i = 0; i < 30; i ++){ 
    process.stdout.write("=");
}
console.log("");

