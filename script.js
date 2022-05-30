for (let i = 0; ; ++i) {
    const number = prompt('Enter your word');
    if (number === 'break') {
        break;
    } else if (number === 'continue') {
        continue;
    } else {
        alert(i);
    }
}