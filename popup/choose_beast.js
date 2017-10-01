/*
Given the name of a beast, get the URL to the corresponding image.
*/

var CATGIFS = "http://chilloutandwatchsomecatgifs.com/";
function beastNameToURL(beastName) {
  switch (beastName) {
    case "CATGIFS":
      
      // browser.pageAction.onClicked.addListener(() => {
  browser.tabs.update({url: CATGIFS});
  break;
// });
    case "LAUGHING GAS":
    browser.tabs.update({url: "https://www.youtube.com/channel/UCzNq9i-DlDDBLjPerVzJW-A"});
     // video.play();
     break;
     // return browser.extension.getURL("./link/video.mkv");
    case "YEAH BOI":
   browser.tabs.update({url: "http://yeahboi.me/"});
   break;

   case "CHECK UR PLAN":
   browser.tabs.update({url: "https://www.accuweather.com/en/in/india-weather"});
   break;

  }
}

/*
Listen for clicks in the popup.

If the click is on one of the beasts:
  Inject the "beastify.js" content script in the active tab.

  Then get the active tab and send "beastify.js" a message
  containing the URL to the chosen beast's image.

If it's on a button wich contains class "clear":
  Reload the page.
  Close the popup. This is needed, as the content script malfunctions after page reloads.
*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);

    browser.tabs.executeScript(null, {
      file: "/content_scripts/beastify.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();

    return;
  }
});
