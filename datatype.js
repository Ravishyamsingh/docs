let myName="ravi";
let name=myName;
name="Shyam";
console.log(myName);

console.log(name);


let userOne={
    name:"ravi",
    age:22,
    email:"ravi@google.com"
}
let userTwo=userOne;
userTwo.email="shyam@google.co"

console.table(userOne.email);
console.log(userTwo.email);

