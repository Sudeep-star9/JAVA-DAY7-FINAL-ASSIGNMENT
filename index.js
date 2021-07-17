let myString = 'hi hi hi hello hello hello ram ram ram shyam ram shyam ram ram ram shyam';

 let string_array=myString.split(' ')
 console.log(string_array)
let myobj={}

 for (let i=0;i<string_array.length;i++){
  if(!myobj[string_array[i]]){
     myobj[string_array[i]]=0;
  }
  myobj[string_array[i]]++;
 }
 console.log(myobj)