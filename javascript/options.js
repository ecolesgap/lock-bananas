var Options = {
  init: function() {
    var that = this;
    this.populate();
    $('#save').click(function() { that.save() });
  },

  populate: function() {
    var data = JSON.parse(localStorage.getItem('Swag-me-in-data'));
    if (data) {
      $('#auth').val(data['auth']);
      $('#api-key').val(data['api_key']);
      $('#content-type').val(data['content_type']);
    }
  },

  save: function() {
    var data = {
      auth: $('#auth').val(),
      api_key: $('#api-key').val(),
      content_type: $('#content-type').val()
    };
    localStorage.setItem('Swag-me-in-data', JSON.stringify(data))
    this.saveMessage();
  },

  saveMessage: function() {
    $('#status').html('Options saved.');
    setTimeout(function() {
      $('#status').html('');
    }, 1500);
  }
};

$(document).ready(function() {
  Options.init();
});
