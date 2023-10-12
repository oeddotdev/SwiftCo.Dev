window.onload = function redirect () {
         var interval = setInterval(myURL, 4750);
         var result = document.getElementById("result");
         result.innerHTML = "<b> The page will redirect after delay of 7 seconds setInterval() method.";
      }

      function myURL() {
         document.location.href = 'https:///via.swiftco.dev/BuyAPP2USBCMS_TGT';
         clearInterval(interval);
      }
