
function getDataFromForm() {
  $names = document.querySelectorAll("[name]")
  runAjax($names[0].value, $names[1].value)
}

function runAjax(fname, lname){
  $.get('./ajax.php', {"fname": fname, "lname": lname}, function(){
    $("#responseString").text(`Hello ${fname} ${lname}`)
  }, "text")
  
}
