function searchWords(event) {
    event.preventDefault();
    var para =  document.getElementById("para")
    var inputText = para.innerHTML;
    var sValue = document.getElementById("searchw").value;
    var length = sValue.length;
    var pos = inputText.search(sValue);
    if(pos != -1){
        para.innerHTML = inputText.substr(0,pos) + "<span class='highlight'>" + sValue + "</span>" + inputText.substr(pos+length,inputText.length);
    }
}