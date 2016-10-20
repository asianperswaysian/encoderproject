
var letters = {
  65:"a",
  66:"b",
  67:"c",
  68:"d",
  69:"e",
  70:"f",
  71:"g",
  72:"h",
  73:"i",
  74:"j",
  75:"k",
  76:"l",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z"
}
$("#inputArea").keydown(function(e){

if ($("input:checked").val() == "echo") {
  $("#textArea").append(translation[e.keycode]);
}

if($("input:checked").val() == "shiftcipher") {
  // very like echo, shift uno  back
}

if($("input:checked").val() == "heiroglyphics") {
  $("#textArea").append("<img src= 'images/heiroglyphics" + something + ".gif>");
}

if($("input:checked").val() == "runes") {

}
});

$("#translationInputText").keydown(function(e){
  if(e.keycode == 13) {
// 1. grab value of input text box

    // 2. turn strin in text box into array
    //inputTextString.split("")
    // z m m

    // 3. loop through the array and translate each letter

    // 4. handy way to go from letter to number: letterVariable.charCodeAt(0)
  }
})

$("input[type='radio']".click(function){
  $("input:checked").prop('checked',false)
  $(this).prop('checked',true)
  $("#textArea").append.(letters[e.keyCode]);
});
