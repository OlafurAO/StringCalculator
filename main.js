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
                var currentJNum = parseInt(currentNum[j]);

                if(!isNaN(currentJNum)){
                    result += currentJNum;
                    numberCount++;
                    //console.log(currentJNum);
                }
            }
        }

        else{
            var currentNum = parseInt(numbers[i]);

            if(!isNaN(currentNum)){
                result += currentNum;
                numberCount++;
                //console.log(currentNum);
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

console.log(Add("1", "2", "1 2")); //should return 6
console.log(Add("1", "2", "1 2", "")); //should return 6
console.log(Add("1", "2", "1 2, 2", "")); //should return 8
console.log(Add("1", "2", "1 2,., 2", ".")); //should return 8