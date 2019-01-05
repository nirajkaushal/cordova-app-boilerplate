document.addEventListener('deviceready', startApp, false);

function startApp () {
    var app = new Framework7({
        root: '#app',
        name: 'Demo App',
        id: 'com.example.demoapp',
        panel: {
          swipe: 'left',
        },
      });

    var mainView = app.views.create('.view-main');
}
