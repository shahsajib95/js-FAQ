function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}

var result = evenify(13);
var square = result * result;
console.log('square', square)

function evenify_all(nums){
    even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result =  evenify(num)
        even_array.push(result);
    }
    return even_array;
};

var nums = [5, 10, 24, 35, 49];
var nums_even =  evenify_all(nums);
console.log(nums_even);






