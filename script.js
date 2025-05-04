// script.js

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('item-hovered');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('item-hovered');
        });
    });
});
window.onload = function() {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
      // Các tùy chọn
      itemSelector: '.grid-item',
      columnWidth: 200, // Độ rộng cột (có thể là số hoặc selector)
      gutter: 10,      // Khoảng cách giữa các item
      percentPosition: true // Sử dụng phần trăm cho vị trí item
    });
  };
  window.onload = function() {
    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 10,
      percentPosition: true
    });
  
    imagesLoaded( grid ).on( 'progress', function() {
      msnry.layout();
    });
  };
  