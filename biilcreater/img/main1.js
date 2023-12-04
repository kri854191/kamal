var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  image_display(fileTag);
  console.log(this,this.files)
});

function image_display(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.readAsDataURL(input.files[0])
    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
      console.log(e.target.result)
    }


  }
}
function image_display1(input,preview_div) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.readAsDataURL(input.files[0])
    reader.onload = function(e) {
      preview_div.setAttribute('src', e.target.result);
      console.log(e.target.result)
    }


  }

}