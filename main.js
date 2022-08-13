var colorInput = document.getElementById("color-input")
var colors = document.querySelectorAll(".color-shade")
var schemeType = document.getElementById("scheme-type")
var colorSchemeCode = document.querySelectorAll('.color-scheme-code')

function colorFetcher() {
    var schemeVal = schemeType.options[schemeType.selectedIndex].value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${schemeVal}`)
        .then((response) => response.json())
        .then((data) => {
            
            data.colors.map((elem, index) => {
                colors[index].style.backgroundColor = data.colors[index].hex.value
                colorSchemeCode[index].textContent = data.colors[index].hex.value 
            })
        })
}

document.querySelectorAll('.getter').forEach(item => {
    item.addEventListener('change', () => {      
        colorFetcher()
    })
  })

colorFetcher() /// to get colors on load

///////////
///END SECTION///
    ////////////

$(document).ready(function() {
     /*  COPY TO CLIPBOARD  */
    
    // click the icon
    $("[id^=copy-]").on("click", function(e) {
      e.preventDefault;
      
      
      // find the id number of the parent
      let num = $(this).parent().attr("id").slice("color-".length);
      let elem = $(".color-" + num);
      
      // copy the text of the background color
      let $temp = $("<input>");
      $("body").append($temp);
      $temp.val(elem.children(":first").text()).select();
      document.execCommand("copy");
      $temp.remove();
      
      $(this).children(".tooltip").addClass("appear").delay(1000).queue(function( next ){
        $(this).removeClass("appear"); 
        $(this).dequeue();
      });
    });
    
});
    
    
    
    
    