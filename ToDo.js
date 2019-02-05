var numericalID = 1
function addNewTask() {
var container = document.getElementById("taskContainer")

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
var idStr="id:"+numericalID
checkbox.id = idStr
checkbox.addEventListener('change',function() {
    var idSplitArray=this.id.split(':')
    var labelStr="label:"+idSplitArray[1]
    var labelTask=document.getElementById(labelStr)
    //alert(idSplitArray)
    if(this.checked) {
       labelTask.style.setProperty("text-decoration", "line-through");
    } else 
    {
       labelTask.style.setProperty("text-decoration","none");
    }})

var label = document.createElement('label')
var labelStr="label:"+numericalID
label.id=labelStr
label.htmlFor = "id";
label.appendChild(document.createTextNode(document.getElementById('taskName').value +"                  "));
    
var delButton=document.createElement('input')
delButton.type="image"
delButton.src="delButton.png"
delButton.id="del:"+numericalID
delButton.addEventListener('click',function(){
    var idSplitArray=this.id.split(':')
    var checkBoxId="id:"+idSplitArray[1]
    var labelStrId="label:"+idSplitArray[1]
    var delButton="del:"+idSplitArray[1]
    var lineBreakId="line:"+idSplitArray[1]
    console.log(lineBreakId)
    console.log(checkBoxId)
    console.log(labelStrId)
    console.log(delButton)
    document.getElementById(checkBoxId).remove();
    document.getElementById(labelStrId).remove();
    document.getElementById(delButton).remove();
    document.getElementById(lineBreakId).remove();
    
    
})

container.appendChild(checkbox);
container.appendChild(label);
container.appendChild(delButton)

var linebreak=document.createElement("br")
linebreakID="line:"+numericalID
linebreak.id=linebreakID
numericalID+=1
container.appendChild(linebreak)
}