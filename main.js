function Add(numbers){
    if(numbers == ""){
        return 0;
    }

    var numberCount = 0;
    var result = 0;

    for(var i = 0; i < numbers.length; i++){
	var currentNum = parseInt(numbers[i]);

	if(!isNaN(currentNum)){
	    result += currentNum;
            numberCount++;
        }
    }

    if(numberCount > 2 || numberCount <= 0){
	   return 0;
    }

    else{
	   return result;
    }
}

console.log(Add("")); //should return 0
console.log(Add(".")); //should return 0
console.log(Add("1")); //should return 1
console.log(Add("1, 3")); //should return 4
console.log(Add("1, , 2")); //should return 3
console.log(Add("1 2, 3")); //should return 0 
                            //(function should only take 0, 1 or 2 numbers)
