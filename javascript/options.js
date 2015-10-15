var options = new function() {
    this.display = function() {
        /*data = JSON.parse(storage.retrieve());
        $('#stored').html();*/
    }

    this.populate = function(key) {
        data = JSON.parse(storage.retrieve());
        if (data != null) {
            $('#auth').val(data['auth']);
            $('#api-key').val(data['api_key']);
            $('#content-type').val(data['content_type']);
        }
    }

    this.save = function() {
        var data = {
            //url: $('#url').val(),
            auth: $('#auth').val(),
            api_key: $('#api-key').val(),
            content_type: $('#content_type').val()
        }
        storage.save(data);
    }
}

//document.addEventListener('DOMContentLoaded', restore_options);
$(document).ready(function() {
    $('#save').click(function() { options.save('x') });
    options.populate();
});