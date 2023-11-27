function changeColor() {
    var circle = document.getElementById('circle');
    var randomColor = getRandomColor();
    circle.style.backgroundColor = randomColor;
  }
  
  function changeSize() {
    var circle = document.getElementById('circle');
    var randomSize = getRandomSize();
    circle.style.width = randomSize + 'px';
    circle.style.height = randomSize + 'px';
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function getRandomSize() {
    return Math.floor(Math.random() * 100) + 50; // Random size between 50 and 150 pixels
  }
  