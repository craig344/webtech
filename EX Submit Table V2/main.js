
var myWindow = null;
function showInput(event) {
    event.preventDefault();
    let elements = document.getElementById("form").elements;
   // var table = document.getElementById("myTable");
   // var row = table.insertRow();
   
    var cell;
    var i,j,k;


   if(myWindow == null || myWindow.closed){
        myWindow = window.open("./table.html","Results","height=960px,width=940px");
    }

    var table = myWindow.document.getElementById("myTable");
    var row = table.insertRow();


    for(i=0; i<elements.length; i++){
        if(elements[i].type == "text"){
            //console.log(elements[i].value);
            cell = row.insertCell(i);
            cell.innerHTML = elements[i].value;
        }
        else if(elements[i].type=="select-multiple"){
            cell = row.insertCell(i);
            let sel = document.getElementById("sub");
            for(j=0; j<sel.options.length; j++){
                if(sel.options[j].selected){
                    //console.log(sel.options[j].value);
                    cell.innerHTML += sel.options[j].value;
                    for(k=j+1; k<sel.options.length; k++){
                        if(sel.options[k].selected){
                            cell.innerHTML += ", "
                        }
                    }
                }
            }
        }
        else if(elements[i].checked){
            //console.log(elements[i].value);
            cell = row.insertCell(k);
            cell.innerHTML = elements[i].value;
        }

        
    }
}