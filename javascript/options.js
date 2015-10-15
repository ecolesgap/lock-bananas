var options = new function() {
    this.display_list = function() {
        alert(storage.retrieve_all());
        $('#stored').html(storage.retrieve_all());
    }

    this.get = function(key) {
        return storage.retrieve(key);
    }

    this.save = function() {
        var data = {
            auth: $('#auth').val(),
            api_key: $('#api-key').val(),
            content_type: $('#content-type').val(),
        }
        storage.save($('#url').val(), data);
    }
}

//document.addEventListener('DOMContentLoaded', restore_options);
$(document).ready(function() {
    $('#save').click(function() { options.save('x') });
    options.display_list();
});