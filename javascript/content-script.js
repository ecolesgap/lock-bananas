var ContentScriptController = {
  load: function() {
    credentials = this.fetchCredentials();
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
  },
  fetchCredentials: function() {
    return StorageService.retriever();
  }
};

$(document).ready(function() {
  //Swagger needs to load all the inputs before this code is execute.
  setTimeout(function() {
    ContentScriptController.load();
  }, 1250);
});
