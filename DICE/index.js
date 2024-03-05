function dice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Assuming p1 is an image element with id="p1"
    var p1 = document.getElementById("p1");

    // Set the src attribute with the filename based on randomNumber1
    p1.setAttribute("src", "dice" + randomNumber1 + ".png");

    var p2=document.getElementById("p2");
    p2.setAttribute("src","dice"+randomNumber2+".png");

    if(randomNumber1>randomNumber2)
    {
        var win=document.getElementById("winner");
        win.innerHTML="Player1 Wins";
    }
    else if(randomNumber2>randomNumber1)
    {
        var win=document.getElementById("winner");
        win.innerHTML="Player2 Wins";
    }
    
    else
    {
        var win=document.getElementById("winner");
        win.innerHTML="DRAW";
    }
}
