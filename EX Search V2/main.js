function searchWords(event) {
    event.preventDefault();
    var para = document.getElementById("para")
    var inputText = para.innerHTML;
    var lengthp = inputText.length;
    var sValue = document.getElementById("searchw").value;
    var pos = 0, found = 0, lengtht = sValue.length; 
    pos = inputText.substring(pos, inputText.length).search(sValue);   

    do {
        console.log(pos);
        pos = inputText.substring(pos + lengtht, lengthp).search(sValue);
    
    }while (pos != -1);
    if (found.length > 0) {
        para.innerHTML = inputText.substring(0, pos) + "<span class='highlight'>" + found + "</span>" + inputText.substring(pos + length, inputText.length);
    }
}