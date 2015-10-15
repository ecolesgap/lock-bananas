var pageRule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        urlContains: 'localhost',
        ports: [81, 3001]
      }
    })
  ],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};


chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([ pageRule ]);
  });
});
