# Add-on_No_boredom
Mozilla hackathon add-on for firefox.# NoBoredom

**This add-on injects JavaScript into web pages. The `addons.mozilla.org` domain disallows this operation, so this add-on will not work properly when it's run on pages in the `addons.mozilla.org` domain.**

## What it does ##

The extension includes:

* a browser action with a popup including HTML, CSS, and JS
* a content script
* It consists of one gif,comedy video,game,link to a weather forecast site,calender packaged as web accessible resources.

After N seconds of inactivity (defined as the user not having navigated
or switched away from the active tab) display a browser action button.

"N" is set to 6 seconds in this example. Such a short period is chosen to make
the extension's behavior more obvious, but this is not recommended in real life.

When the user clicks the browser action button, the popup is shown, enabling
the user to choose any one of above.

When they choose a tab, the extension injects the content script into
the current page, and sends the content script a message containing
the name of the chosen link.

When the content script receives this message, it replaces the current page
and displays the site of chosen link.

When the user clicks the reset button, the page reloads, and reverts to its original form.

## What it shows ##
* how to show/hide a page action
* how to set alarms and handle alarms going off
* write a browser action with a popup
* give the popup style and behavior using CSS and JS
* inject a content script programmatically using `tabs.executeScript()`
* send a message from the main extension to a content script
* use web accessible resources to enable web pages to load packaged content
* reload web pages

