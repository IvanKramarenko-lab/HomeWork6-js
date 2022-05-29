let i = 0;
alert(i);

while (true) {
    const number = prompt('Enter your word');
    if (number === 'break') {
        break;
    } else if (number === 'continue') {
        ++i;
        continue;
    }
}