const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi itaque, magnam exercitationem maxime cupiditate dolorem cum soluta aliquid molestias dignissimos. Sed quisquam, commodi tenetur rem voluptas dolore minus! Eligendi.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function(){
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event){
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    }
}