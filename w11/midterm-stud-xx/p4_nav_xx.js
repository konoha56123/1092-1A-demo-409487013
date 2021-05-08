function gopage(index) {
    const player = document.querySelector('#main');
    console.log('player', player);
    switch (index) {
      case 1:
        player.innerHTML = `<iframe  src="./p1_xx/tictactoe_xx.html" width="100%" height="700px"></iframe>`;
        break;
      case 2:
        player.innerHTML =
          '<iframe src="./p2_xx/resume_xx.html" width="100%" height="700px"></iframe>';
        break;
      case 3:
        player.innerHTML = `<iframe src="./p3_xx/divjsDemo_xx.html" width="100%" height="700px"></iframe>`;
        break;
    }
  }