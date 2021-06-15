



  
  function gopage(index) {
    const player = document.querySelector('.dark-overlay');
    console.log('player', player);
    switch (index) {
      case 1:
        player.innerHTML = `<iframe  src="./protfolio.html" width="100%" height="100%"></iframe>`;
        break;
        case 2:
          player.innerHTML = `<iframe  src="./blog.html" width="100%" height="100%"></iframe>`;
          break;
     }
    }

    function goback() {
      const player = document.querySelector('.landing');
      console.log('goback', player);
      player.innerHTML = `
      <div class="dark-overlay">
      <div class="landing-inner">
          <h1 class="x-large">歡迎來到我的網站</h1>
          <p class="lead">
          我是學號409487013 陳冠宇 請多多指教
          </p>
          <div class="buttons" >
            
              <a onclick="gopage(1)" class="btn btn-primary">Portfolio</a>
              <a onclick="gopage(2)" class="btn btn-primary">心得</a>
          </div>
      </div>
            
          `
       }
      