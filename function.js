function evenify(num){
    if(num % 2 == 0){
        console.log(num, ': num is even')
    }
    else{
        console.log(num*2, ': num is odd')
    }
}

function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num)
    }
};

nums = [5, 10, 24, 35, 49];
evenify_all(nums);

all_age = [10, 16, 24, 45, 60];
evenify_all(all_age);




