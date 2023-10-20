
function getDataFromForm() {
  $names = $("[name]")
  //console.log($names.data().text)
  runAjax($names.data("fname").text, $names.data("lname").text)
}

function runAjax(fname, lname){
  //var xhr = new XMLHttpRequest
  //xhr.open('GET', './ajax.php', true)
  //xhr.send(`fname=${fname}, lname=${lname}`)
  $.get('./ajax.php', {"fname": fname, "lname": lname}, function(){
    $("#responseString").text("Request succeeded")
  }, text)
}
