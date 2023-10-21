
function getDataFromForm() {
  $names = document.querySelectorAll("[name]")
  runAjax($names[0].value, $names[1].value)
}

function runAjax(fname, lname){
  /*
  var xhr = new XMLHttpRequest
  xhr.open('GET', './ajax.php', true)
  xhr.send(`fname=${fname}, lname=${lname}`)
  */
  $.get('./ajax.php', {"fname": fname, "lname": lname}, function(){
    $("#responseString").text("Request succeeded")
  }, "text")
  
}
