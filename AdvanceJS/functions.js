// 1. Function can be passed around like normal variable
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Sam");


