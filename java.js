function Otvori(id)
{
    myWindow = window.open(
        "zivotinja.html?u=" + id,
        "myWindow",
        "width=500,height=500"
      );
}



function hover(id)
{
var audio= new Audio("zvuci/"+id+".mp3");
audio.play();
}