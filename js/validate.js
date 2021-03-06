function Validate () {
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let address = document.querySelector("#address").value.trim();
    let comment = document.querySelector("#comment").value.trim();

    if (!name) {
        alert("A név megadása kötelező!");
    } else if (!email || !(email.indexOf('@') > 0) || !(email.indexOf('.') > 0)) {
        alert("Invalid e-mail cím!");
    } else if (address.length < 10) {
        alert("A cím túl rövid!");
    } else if (comment.indexOf("<") >= 0 && comment.indexOf(">") >= 0) {
        alert("Nem megengedett karaktert tartalmaz!");
    } else if (quantity > 10 || quantity < 1 || isNaN(quantity)) {
        alert("Minimum 1 és maximum 10 db terméket vásárolhat!");
    } else {
        price();
    }