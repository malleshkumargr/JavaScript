function add() {
    console.log(this);
}

add.bind({'name':'mallesh'})();