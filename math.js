function math(a, b, signal){
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
}


// module.exports(math)