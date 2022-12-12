const returnTrue = () => {
    console.log('Return true');
    return true;
}

const returnFalse = () => {
    console.log('Return false');
    return false;
}
// Not !
console.warn('Not !');
console.log(true);
console.log(!true); //Not <!>
console.log(!false); //Not <!>
console.log(!returnTrue());

// And && -> if all conditions are true
console.warn('And &&');
console.log(true && true);


// OR || return true if at least one condition is true
console.warn('OR ||');
console.log(false || true);
console.log(false || false);


