const form = document.getElementById('valform');
var button = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var Ninput = document.getElementById("numero");
Ninput.focus();
document.execCommand("paste").value;
Ninput.select();

function checarN(ncel){
    let result55 = ncel.includes("55",0);
    if (!result55){
        ncel = "55"+ncel;
    }
    /*let result0 = ncel.includes("0",2);
    if (!result0){
        ncel = ncel.slice(0, 2) + ncel.slice(3);
    }*/
    return ncel;
}

button.addEventListener("click", function(){
    var celular = Ninput.value.replace(/\D/g,'');
    celular = checarN(celular);
    var endere = "https://web.whatsapp.com/send?phone=" + celular + "&text&app_absent=0";
    chrome.tabs.create({url:endere});
});

button2.addEventListener("click", function(){
    var celular = Ninput.value.replace(/\D/g,'');
    celular = checarN(celular);
    var endere = "https://api.whatsapp.com/send?phone=" + celular + "&text&app_absent=0";
    chrome.tabs.create({url:endere});
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    var celular = Ninput.value.replace(/\D/g,'');
    celular = checarN(celular);
    var endere = "https://web.whatsapp.com/send?phone=" + celular + "&text&app_absent=0";
    chrome.tabs.create({url:endere});
});
