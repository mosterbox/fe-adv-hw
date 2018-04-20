const user = {
    name: 'Claudia Cardinale',
    src: 'img/tiger.jpg',
    general: '29 * Philadelfia, PA',
    strawberries: '20',
    lemon: '19'
}
const createTile = (user) => {
    console.log(user);

    const parentDiv = document.createElement('div');
    parentDiv.classList.add('tile');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('img-avatar');
    avatarImg.src = user.src;

    const avatarName = document.createElement('p');
    avatarName.innerText = user.name;
    avatarName.style.color = 'red';

    const avatarGeneral = document.createElement('p');
    avatarGeneral.innerText = user.general;

    const containerS = document.createElement('div');
    containerS.classList.add('containerS');

    const containerL = document.createElement('div');
    containerL.classList.add('containerL');

    const containerH = document.createElement('div');
    containerH.classList.add('containerH');

    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('Bottom');

    const strawberries = document.createElement('img');
    strawberries.classList.add('strawberries');
    strawberries.src = 'https://github.com/ksendows/fe-advanced-hw/blob/master/module7_additional_task/strawberry.png?raw=true';
    const strawberriesCount = document.createElement('span');
    strawberriesCount.innerText = user.strawberries;

    const lemon = document.createElement('img');
    lemon.classList.add('lemon');
    lemon.src = 'https://github.com/ksendows/fe-advanced-hw/blob/master/module7_additional_task/lemon.png?raw=true';
    const lemonCount = document.createElement('span');
    lemonCount.innerText = user.lemon;

    const hand = document.createElement('img');
    hand.classList.add('hand');
    hand.src = 'https://github.com/ksendows/fe-advanced-hw/blob/master/module7_additional_task/hand.png?raw=true';

    contentDiv.append(avatarImg);

    contentDiv.append(avatarName);

    contentDiv.append(avatarGeneral);

    containerS.append(strawberries);
    containerS.append(strawberriesCount);

    containerL.append(lemon);
    containerL.append(lemonCount);

    containerH.append(hand);

    bottomContainer.append(containerS);
    bottomContainer.append(containerL);
    bottomContainer.append(containerH);
    contentDiv.append(bottomContainer);

    parentDiv.append(contentDiv);

    const target = document.querySelector('#app');
    target.append(parentDiv);
}

createTile(user);
