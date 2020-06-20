 function explain_callback(name, age, task){
     console.log('Salam', name);
     console.log('Your age is', age);
     task();
 }

 function pray(){
     console.log('Pray 5 times');
 }

 function NeedPray(){
    console.log('You need to pray now');
}

 explain_callback('Shahariar', 24, pray);
 explain_callback('Ashiqur', 18, pray);
 explain_callback('Abdullah', 12, NeedPray);
