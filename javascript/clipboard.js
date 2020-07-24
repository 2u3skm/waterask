function copy() {
  var text = document.getElementsByTagName("textarea")[0];
  
  text.select();
  document.execCommand("copy");
  
  }
  