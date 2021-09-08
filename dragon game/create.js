score = 0;
cross = true;
document.onkeydown = function (e) {
  console.log("key code is :", e.keyCode)
  if (e.keyCode == 38) {
    astro = document.querySelector('.astro');
    astro.classList.add("astro-jump");
    setTimeout(() => {
      console.log("Yes");
      astro.classList.remove("astro-jump");
    }, 700);
  }

  if (e.keyCode == 39) {
    astro = document.querySelector('.astro');
    astro.classList.add("astro");
    astrox = parseInt(window.getComputedStyle(astro, null).getPropertyValue('left'));
    astro.style.left = astrox + 100 + 'px';
  }

  if (e.keyCode == 37) {
    astro = document.querySelector('.astro');
    astro.classList.add("astro");
    astrox = parseInt(window.getComputedStyle(astro, null).getPropertyValue('left'));
    astro.style.left = (astrox - 100) + 'px';
  }

}

setInterval(() => {
  astro = document.querySelector('.astro');
  gameover = document.querySelector('.gameover');
  obstacle = document.querySelector('.obstacle');

  dx = parseInt(window.getComputedStyle(astro, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(astro, null).getPropertyValue('top'));

  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  diffx = Math.abs(dx - ox);
  diffy = Math.abs(dy - oy);

  if (diffx < 90 && diffy < 30) {
    gameover.style.visibility = 'visible';
    obstacle.classList.remove('obstaclemove');
  }
  else if (diffx < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    anidur = parseFloat(window.getComputedStyle(astro, null).getPropertyValue('animation-Duration'));
    newdur = anidur - 10;
    obstacle.style.animationDuration = newdur + 's';
  }

}, 10);

function updateScore(score) {
  scoreCont.innerHTML = "Your score is" + " " + score
}
