window.onload = function redirect () {
         var interval = setInterval(myURL, 4000);
         var result = document.getElementById("result");
         result.innerHTML = "<b> The page will redirect after delay of 7 seconds setInterval() method.";
      }

      function myURL() {
         document.location.href = 'https://to.swiftco.dev/APP2P';
         clearInterval(interval);
      }
