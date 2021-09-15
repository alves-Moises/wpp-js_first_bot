function math(input){
    input = input.split(" ")
    var a = input[1]
    var b = input[3]
    var signal = input[2]
    try{
        switch(signal) {
        case '+':
            console.log('Math, sum')
            return a + b;
            
        case '-':
            console.log('Math, sub')
            return a - b;
            
        case '*':
            console.log('Math, mult')
            return a * b;   
            
            case '/':
                console.log('Math, div')
                return a / b;
        }
    }catch(err){
        console.log(`Error. {err}`)
        return err
    }
}


// module.exports(math)