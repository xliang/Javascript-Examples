function Constructor() {
    var privateProperty = 'private';
    var privateMethod = function() {
        alert('Called from private method');
    };

    this.publicProperty = "I'm public!";
    this.publicMethod = function() {
        alert('Called from public method');
    };
    this.getter = privateMethod;
}

// So instead, create them by assigning to this, possibly with a safeguard to prevent forgotten news.

// Even better, use the prototype when possible:

function Constructor() {
    var privateProperty = 'private';
    var privateMethod = function() {
        alert('Called from private method');
    };

    this.getter = privateMethod;
}

Constructor.prototype.publicProperty = "I'm public!";
Constructor.prototype.publicMethod = function() {
    alert('Called from public method');
};
