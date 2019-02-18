function searchWords(event) {
    event.preventDefault();
    var para =  document.getElementById("para")
    var inputText = para.innerHTML;
    var sValue = document.getElementById("searchw").value;
    var length = sValue.length;
    var pos = inputText.search(sValue);
    var found = inputText.slice(pos,pos+length);
    if(found.length > 0){
        para.innerHTML = inputText.substr(0,pos) + "<span class='highlight'>" + found + "</span>" + inputText.substr(pos+length,para.length);
    }
    
    


}