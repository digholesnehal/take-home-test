function findPosition(num, arr) {
    let length = parseInt(arr.length/2);
    if (arr[length] > num) {
        return findPosition(num, arr.slice(0, length))
    }
    else if(arr[length] < num) {
        return findPosition(num, arr.slice(length - 1))
    }
    else {
        return arr[length] === num ? length : undefined;
    }
}

console.log("LOG THE RETURNED ANSWER: ", findPosition(-5, [-15, -5, 3, 5 ,12, 15, 36]))