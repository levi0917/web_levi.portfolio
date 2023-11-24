var typed = new Typed('#element', {
    strings: ['Hello, Mate I Am Levi',],
    typeSpeed: 50,
  });

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('back-to-top-btn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    button.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
