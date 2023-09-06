function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

document.getElementsByName('personal_details[firstname]')[0].value = randomString(5);
document.getElementsByName('personal_details[surname]')[0].value = randomString(5);

document.getElementById('confirm_form').submit();
