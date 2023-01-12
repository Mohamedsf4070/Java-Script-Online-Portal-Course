
function Cancellation() {
    document.getElementById('book').value = "";
    document.getElementById('email').value = "";
    document.getElementById('name').value = "";
    document.getElementById('publish').value = "";
    document.getElementById('price').value = "";
}
function Store() {
    if(document.getElementById('book').value=="Enter correct Bookname" || document.getElementById('email').value=="Enter correct Id" || document.getElementById('name').value=="Enter correct Authorname" || document.getElementById('publish').value=="Enter Valid Year" || document.getElementById('price').value=="Enter Valid Price")
    {
      Cancellation();  
    }
    else if(document.getElementById('book').value=="" || document.getElementById('email').value=="" || document.getElementById('name').value=="" || document.getElementById('publish').value=="" || document.getElementById('price').value=="")
    {
        Cancellation();
    }
    else
    {
    var category = document.getElementById('dropdown').value;
    var bookname = document.getElementById('book').value;
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var publish = document.getElementById('publish').value;
    var price = document.getElementById('price').value;
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('bookname', bookname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('publish', publish);
    sessionStorage.setItem('price', price);
    }

}
function Display() {
    var id = document.getElementById('page2');
    let html = `
    <p style="font:bold 16px arial"; > ${sessionStorage.getItem('bookname')} Book Details</p>
    <table>
    <tr>
    <td><p style="font:bold 16px arial";>Category  </p></td>
    <td><p>${sessionStorage.getItem('category')}<p></td>
    </tr>
    <tr>
    <td><p style="font:bold 16px arial";>Book </p></td>
    <td><p>${sessionStorage.getItem('bookname')}</p></td>
    </tr>
    <tr>
    <td> <p style="font:bold 16px arial";>Author Email </p></td>
    <td><p>${sessionStorage.getItem('email')}<p></td>
    </tr>
    <tr>
    <td><p style="font:bold 16px arial";>Author </p></td>
    <td><p>${sessionStorage.getItem('name')}</p></td>
    </tr>
    <tr>
    <td><p style="font:bold 16px arial";>Published </p></td>
    <td><p>${sessionStorage.getItem('publish')}</p></td>
    </tr>
    <td><p style="font:bold 16px arial";>Price</p></td>
    <td><p>${sessionStorage.getItem('price')}</p></td>
    </tr>
    </table>
    <br>
    <br>
    <br>
    <br>
    <hr border=2px width="100%" color="black">
    <p style="font-weight:bold">Copyright-@2019-present Syncfusion</p>
    `;
    id.innerHTML = html;
}
function CheckEmail() {
    let user = document.getElementById('email').value;
    let box = document.getElementById('email');
    let rejex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let result = user.match(rejex);
    if (result != null) {
        box.style.border = "black solid 1px";
        return true;
    }
    else {
        box.style.border = "red solid 2px";
        document.getElementById('email').value = "Enter correct Id";
        return false;
    }
}
function Clearemail() {
    if (document.getElementById('email').value == "Enter correct Id") {
        document.getElementById('email').value = "";
    }
}
function CheckaAuthorName() {
    let user = document.getElementById('name').value;
    let box = document.getElementById('name');
    let rejex = /\d/;
    let rejex1 = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;
    if (rejex.test(user)) {

        box.style.border = "red solid 1px";
        document.getElementById('name').value = "Enter correct Authorname";
        return false;
    }
    else if (user.length > 50) {
        box.style.border = "red solid 1px";
        document.getElementById('name').value = "Enter correct Authorname";
        return false;
    }
    else if (rejex1.test(user)) {
        box.style.border = "red solid 1px";
        document.getElementById('name').value = "Enter correct Authorname";
        return false;
    }
    else {
        box.style.border = "black solid 2px";
        return true;
    }
}
function ClearAuthorName() {
    if (document.getElementById('name').value == "Enter correct Authorname") {
        document.getElementById('name').value = "";
    }
}
function CheckBookName() {
    let user = document.getElementById('book').value;
    let box = document.getElementById('book');
    let rejex = /\d/;
    if (rejex.test(user)) {

        box.style.border = "red solid 1px";
        document.getElementById('book').value = "Enter correct Bookname";
        return false;
    }
    else if (user.length > 50) {
        box.style.border = "red solid 1px";
        document.getElementById('book').value = "Enter correct Bookname";
        return false;
    }
    else {
        box.style.border = "black solid 2px";

        return true;
    }
}
function ClearBookName() {
    if (document.getElementById('book').value == "Enter correct Bookname") {
        document.getElementById('book').value = "";
    }
}
function CheckDate() {
    var date = document.getElementById('publish').value;
    var box = document.getElementById('publish');
    if (isNaN(date) || date > 2023) {
        box.style.border = "red solid 1px";
        document.getElementById('publish').value = "Enter Valid Year";
        return false;
    }
    else {
        box.style.border = "black solid 1px";
        return true;
    }
}
function ClearDate() {
    if (document.getElementById('publish').value == "Enter Valid Year") {
        document.getElementById('publish').value = "";
    }
}
function CheckPrice() {
    var date = document.getElementById('price').value;
    var box = document.getElementById('price');
    if (isNaN(date)) {
        box.style.border = "red solid 1px";
        document.getElementById('price').value = "Enter Valid Price";
        return false;
    }
    else {
        box.style.border = "black solid 1px";
        return true;
    }
}
function ClearPrice() {
    if (document.getElementById('price').value == "Enter Valid Price") {
        document.getElementById('price').value = "";
    }
}