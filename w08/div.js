function changeVideo(index) {
    const player=document.querySelector('#player')
    console.log('player', player);
    switch (index) {
        case 1:
            player.innerHTML=`                      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`
        break;
        case 2:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`  
        break;
        case 3:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        case 4:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        case 5:
            player.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        break;
        case 6:
            player.innerHTML=`<img src="./images/TKU1.png" style="width: 100%; height: auto" />`;
        break;
        case 7:
            player.innerHTML=`<img src="./images/TKU2.png" style="width: 100%; height: auto" />`;
        break;
        case 8:
            player.innerHTML=`<img src="./images/TKU3.png" style="width: 100%; height: auto" />`;
        break;
        case 9:
            player.innerHTML=`<img src="./images/TKU4.png" style="width: 100%; height: auto" />`;
        break;
        case 10:
            player.innerHTML=`<img src="./images/TKU5.png" style="width: 100%; height: auto" />`;
        break;
    }
}

function changeColor(index) {
    const p = document.querySelector('#section');
    console.log('section', section);
    switch (index) {
        case 1:
            p.style.backgroundColor='yellow';
        break;
        case 2:
            p.style.backgroundColor='red';
        break;
        case 3:
            p.style.backgroundColor='blue';
        break;
    }
}








