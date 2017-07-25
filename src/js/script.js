$(document).ready(function(){
        $('#typing').typeIt({
         strings: ['Well hello there', 'I am surreal jupiter', 'Hope your day has been well', 'Did you get enough sleep?', 'Coffee?', 'Whats on your mind', 'Read any good books lately?', 'Been drinkin enough water?', 'Dont be afraid', 'I dont bite'],
          breakDelay: 4000,
          cursor: false,
          loop: true,
          deleteSpeed: 75,
          speed: 100,
          lifeLike: true,
          breakLines: false
        })
        .tiDelete(11)
        .tiType('Wll')
        .tiPause(500)
        .tiDelete(2)
        .tiType('ell, ')
        .tiPause(1000)
        .tiType('I guess I\'m typing..')
        .tiBreak() .tiPause(750)
        .tiType(' but I don\'t really know what to say')
        .tiSettings({speed: 100})
        .tiType('...');

        

});

// Get the modal
var modal = document.getElementById('about');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Overlay
var overlay = document.getElementById("overlay");

// Event Listener
window.addEventListener('load', function(){
    overlay.style.display = 'none';
});


