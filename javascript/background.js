var CREDENTIALS = {
  apiKey: '9a3d7cc7806c4390e07399d362c6a04a491c5cc5ad27a16aa1f22b678b92888d',
  authorization: 'Basic VVNFUk5BTUUxOnBhc3N3b3Jk',
  contentType: 'application/json'
};

var Background = {
  init: function() {
    var that = this;
    var messageListener = function(request, sender, sendResponse) {
      if (request.action == "credentials") {
        var credentials = that.fetchCredentials();
        sendResponse({credentials: credentials});
      }
    };

    // var pageRule = {
    //   conditions: [
    //     new chrome.declarativeContent.PageStateMatcher({
    //       pageUrl: {
    //         urlContains: '/documentator/',
    //         ports: [81, 3001, 82, 3002]
    //       }
    //     })
    //   ],
    //   actions: [ new chrome.declarativeContent.ShowPageAction() ]
    // };

    // var rulesCallback = function () {
    //   chrome.declarativeContent.onPageChanged.addRules([ pageRule ]);
    // };

    // var installedListener = function() {
    //   chrome.declarativeContent.onPageChanged.removeRules(undefined, rulesCallback);
    // };

    // chrome.runtime.onInstalled.addListener(installedListener);
    chrome.runtime.onMessage.addListener(messageListener);
  },

  fetchCredentials: function() {
    return CREDENTIALS;
  }
};

(function() { this.init(); }).apply(Background);
