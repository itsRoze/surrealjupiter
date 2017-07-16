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