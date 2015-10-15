var storage = new function() {
    var storagekey = 'Swag-me-in-data'
    this.save = function(data) {

        //current_array = JSON.parse(localStorage.getItem(storagekey));

        localStorage.setItem(storagekey, JSON.stringify(data))
        console.log("Saved a new array item");
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1500);
    }
    this.retrieve = function() {
        // Use default value color = 'red' and likesColor = true.
        return localStorage.getItem(storagekey);

    }
    /*this.retrieve_all = function() {
        // Use default value color = 'red' and likesColor = true.
        localStorage.getItem(storagekey);
    } */
}