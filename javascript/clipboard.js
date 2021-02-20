function ShowLength( str ) {
  document.getElementById("inputlength").innerHTML = str.length + "文字";
}

function copy() {
  var text = document.getElementsByTagName("textarea")[0];
  
  text.select();
  document.execCommand("copy");

}

function clearTextarea() {
	var textareaForm = document.getElementById("form2");
  textareaForm.value = '';
  document.getElementById("inputlength").innerHTML = "0文字";
}
