// forEach

let fruits = ['apple', 'banana', 'pineapple', 'orange', 'avocado'];

function printFruits(element) {
    console.log(element);
}

fruits.forEach(printFruits);
//

// map

let array_of_numbers = [1,3,5,7,9];

function number_squarer(receiver){
    return receiver * receiver;
}

let new_array = array_of_numbers.map(number_squarer);
console.log(new_array);

//

// filter

let words = ['hello', 'my', 'name', 'is', 'kenny', 'delara', 'random_word'];

function letter_counter(word){
    if (word.length > 5 )
        return true;
    else
        return false;
}

let words_greater_than_five = words.filter(letter_counter);
console.log(words_greater_than_five);

//

//slice

let slice_this_word = 'Kenny';

let new_word = slice_this_word.slice(slice_this_word.length = 0,3);
console.log(new_word);