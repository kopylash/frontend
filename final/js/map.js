function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng =new google.maps.LatLng(50.4495, 30.4606)
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Molly Webstudio'
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);