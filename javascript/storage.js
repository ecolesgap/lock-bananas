var storage = new function() {
    var storagekey = 'Swag-me-in-array'
    this.save = function(key, data) {
        var item_key = storagekey;
        current_array = JSON.parse(localStorage.getItem(storagekey));

        localStorage.setItem(item_key, JSON.stringify())
        console.log("Saved a new array item");
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1500);
    }
    this.retrieve = function(url) {
        // Use default value color = 'red' and likesColor = true.
        array = localStorage.getItem(storagekey);
        $.each(array, function(index, data) {
            if (data.url.search(new RegExp(url)) != -1) {
                return data;
            }
        });
    }
    this.retrieve_all = function() {
        // Use default value color = 'red' and likesColor = true.
        localStorage.getItem(storagekey);
    }
}