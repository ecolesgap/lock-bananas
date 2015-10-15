var options = new function() {
    this.display = function() {
        data = JSON.parse(storage.retrieve());
        $('#stored').html();
    }

    this.get = function(key) {
        return storage.retrieve(key);
    }

    this.save = function() {
        var data = {
            //url: $('#url').val(),
            auth: $('#auth').val(),
            api_key: $('#api-key').val(),
            content_type: $('#content-type').val()
        }
        storage.save(data);
    }
}

//document.addEventListener('DOMContentLoaded', restore_options);
$(document).ready(function() {
    $('#save').click(function() { options.save('x') });
    options.display();
});