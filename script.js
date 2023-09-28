//your JS code here. If required.
        var userAgent = navigator.userAgent;
        var appName = navigator.appName;
        var appVersion = navigator.appVersion;


           function getBrowserInfo(userAgent) {
            var browserInfo = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            var browserName = browserInfo[1];
            var browserVersion = browserInfo[2];

            return {
                name: browserName,
                version: browserVersion
            };
        }

   var browser = getBrowserInfo(userAgent);

        // Display the browser information on the page
        var browserInfoDiv = document.getElementById('browser-info');
        browserInfoDiv.textContent = "You are using " + browser.name + " version " + browser.version;
    

