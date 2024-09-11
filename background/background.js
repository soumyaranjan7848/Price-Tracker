
chrome.runtime.onInstalled.addListener(() => {
    console.log("Price Tracker Extension Installed");
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "priceCheck") {
        // Logic to check price updates on specific websites (Amazon, Flipkart, eBay)
        console.log("Checking for price updates...");
        // Example: Fetch API or scrape price data
    }
});

chrome.notifications.create({
    type: "basic",
    iconUrl: "icons/icon48.png",
    title: "Price Alert",
    message: "A product you're tracking has dropped in price!"
});
