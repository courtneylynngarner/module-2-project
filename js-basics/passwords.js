
let welcome = 'Welcome to the password validator tool.' 
console.log(welcome)

let prompt = 'Please enter a password' ;
console.log(prompt)
function enterPw(string) {
    if(string.length >= [10]){
        console.log('Success! You have created a password.')
    } else {
        console.log('Your password must be 10 characters long')
    }
    
}

enterPw("crystals123");