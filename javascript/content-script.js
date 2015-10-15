var ContentScript = {
  init: function() {
    this.fetchCredentials();
  },

  fetchCredentials: function() {
    var that = this;
    chrome.runtime.sendMessage({action: "credentials"}, function(response) {
      setTimeout(function() {
        that.populateInputs(response.credentials);
      }, 10000);
    });
  },

  populateInputs: function(credentials) {
    this.apiKeyInputs().val(credentials.apiKey);
    this.authorizationInputs().val(credentials.authorization);
    this.contentTypeInputs().val(credentials.contentType);
  },

  apiKeyInputs: function() {
    return $("input.required[type='text'][name='X-API-KEY']");
  },
  authorizationInputs: function() {
    return $("input.required[type='text'][name='Authorization']");
  },
  contentTypeInputs: function() {
    return $("input.required[type='text'][name='Content-Type']");
  }
};

$(document).ready(function() {
  ContentScript.init();
});
