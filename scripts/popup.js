
document.getElementById("trackButton").addEventListener("click", function() {
    const productUrl = document.getElementById("productUrl").value;
    
    if (productUrl) {
        // Save the product URL and set up alarms to track price
        chrome.storage.sync.set({productUrl: productUrl}, () => {
            console.log("Product URL saved:", productUrl);
            document.getElementById("status").textContent = "Tracking started!";
        });
        
        // Set an alarm to check prices every hour
        chrome.alarms.create("priceCheck", {periodInMinutes: 60});
    }
});
