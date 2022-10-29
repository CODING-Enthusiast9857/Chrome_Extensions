chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    {urls: ["*://*.doubleclick.net/*"]},
    ["blocking"]
)
defaultFilters=[
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://partner.googleadservices.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
]