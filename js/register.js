function View() {

    var username = document.getElementById("username-register").value;
    var password = document.getElementById("password-register").value;
    var mail = document.getElementById("mail").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementsByName("gioitinh");
    var gen = "";
    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            if(gender[i].value === "Male"){
                gen = "Male"
            } else {
                gen = "Female";
            }
        }
    }
    
    var languages = document.getElementsByName("languages");
    var lang = [];
    for(var i = 0; i < languages.length; i++){
        if(languages[i].checked){
            lang.push((languages[i].value).toUpperCase());
        }
    }
    var skill = document.getElementById("list").value;

    var view = document.getElementById("get1");
    view.innerHTML = "Username: " + username + "<br/>";
    view.innerHTML += "Password: " + password + "<br/>";
    view.innerHTML += "Mail: " + mail + "<br/>";
    view.innerHTML += "Address: " + address + "<br/>";
    view.innerHTML += "Gender: " + gen + "<br/>";
    view.innerHTML += "Programming Languages: " + lang.join(", ") + "<br/>";
    view.innerHTML += "Skill: " + skill + "<br/>";

    var cl2 = document.getElementById("get2");
    cl2.innerHTML = "";

    var cl3 = document.getElementById("get3");
    cl3.innerHTML = "";

} 

// function Regis(){
//     var name = document.getElementById("username-register").value;
//     var pass = document.getElementById("password-register").value;
//     var mail = document.getElementById("mail").value;
//     var ads = document.getElementById("address").value;
//     alert("username: "+name+" ; password: "+pass+ " ; mail: "+mail+ " ; address: "+ads);
// 	var obj = document.getElementById("pa");
//     obj.innerHTML = pas;

// }


// function getCheck(){
// 	var check = document.getElementByClassName("check");
// 	var str = '';
// 	for (i=0; i<4; i++) {
//         if (check[i].checked === true){
//             str += check[i].value + " ";
//         }
// 	}
// 	alert(str);
// 	var gt = document.getElementById("get");
//     gt.innerHTML = str;
// }
/*function Register(){

	var main = document.getElementById("main");
	main.classList.toggle("active");  // tổng hợp từ classList.add() và classList.remove()
	                                  // classList.toggle(): nếu chưa có class thì thêm vào thẻ html, đã có thì bỏ!
	var popup = document.getElementById("popup");
	popup.classList.toggle("active");      
} 
*/

