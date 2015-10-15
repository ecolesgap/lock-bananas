var Background = {
  init: function() {
    var that = this;
    var messageListener = function(request, sender, sendResponse) {
      if (request.action == "credentials") {
        var credentials = that.fetchCredentials();
        sendResponse({credentials: credentials});
        }
    };

    chrome.runtime.onMessage.addListener(messageListener);
  },

  fetchCredentials: function() {
    var credentials = JSON.parse(localStorage.getItem('Swag-me-in-data'));
    return {
      apiKey: credentials["api_key"],
      authorization: credentials["auth"],
      contentType: credentials["content_type"]
    };
  }
};

(function() { this.init(); }).apply(Background);
