function welcomeMessage() {
    let h1 = document.createElement('h1');
    let text;
    let Name = prompt('Enter your Name please');
    if (Name == null || Name == '') {
        text = 'Name is Not found';
    } else {
        text = 'Welcome ' + Name;
    };
    let creatTextNode = document.createTextNode(text);
    h1.appendChild(creatTextNode);
    document.body.appendChild(h1);
}
welcomeMessage();