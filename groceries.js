var myList = [];
function addItem() {
  var input;
  var list;
  var item;
  var itemName;
  var iconClose;
  var btnClose;
  input = document.getElementById("newItem").value;
  list = document.getElementById("listDisplay");
  itemName = document.createTextNode(input);
  item = document.createElement("li");
  btnClose = document.createElement("button");
  btnClose.classList.add("btn","btn-danger","btn-xs");
  btnClose.addEventListener("click",removeParentListItem);
  iconClose = document.createElement("span");
  iconClose.classList.add("glyphicon","glyphicon-remove");
  btnClose.appendChild(iconClose);
  item.appendChild(itemName);
  list.appendChild(item);
  item.appendChild(btnClose);
  document.getElementById("newItem").value="";
    if (myList.indexOf(input) = -1) {
      myList.push(input);
      console.log(myList);
    }
    else {
    }
}
function removeParentListItem() {
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
