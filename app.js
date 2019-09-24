<script> 

document.numberMarks = 0;

function clicked(a)
{ //         a  b   c   d   e
  // x -> 68 98 123 146 169 
  // y- > 120 152 177 199 227 251 274 296 322 346 372 395 421 445 471 490 518 543 565 590 613 633 662 685 707 730
  if (a.target.id === "scantron")
  {
    console.info(a);
    var letter = "";
    if (a.layerX <= 111) 
    {
      letter = "A";
    }
    else if (a.layerX > 111 && a.layerX <= 141) 
    {
      letter = "B";
    }
    else if (a.layerX > 141 && a.layerX <= 169) 
    {
      letter = "C";
    }
    else if (a.layerX > 146 && a.layerX <= 197) 
    {
      letter = "D";
    }
    else
    {
      letter = "E";
    }
    
    
    const questions = [{"text": "nil"},{"text": "Test question", "type": "truefalse"}];
    
    var number = Math.round((a.layerY - 133) / 29);
    if (number > 0) {
      coord.innerHTML = ( "<h2>" + number + ":" + letter + " </h2>");
      
      drawPencil(number + letter, a.target, a.clientX, a.clientY);
      
    }
  }
}

var mdflag;
var count = 0;

document.addEventListener("mousedown", mdown,false);
document.addEventListener("mouseup", mup, false);


function drawPencil(id, target, x, y)
{
  c = document.createElement("canvas");
  c.id = id;
  c.width = c.height = 20;
  ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(20, 0);
  ctx.lineTo(1, 3);
  ctx.lineTo(22, 1);
  ctx.stroke(); 
  c.style.position = "fixed";
  c.style.left = x + "px";
  c.style.top = y + "px";
  target.parentElement.appendChild(c);
  
}

function mdown(evt)
{
  mdflag=true;
  while(mdflag)
  //drawPencil('', evt.target, evt.clientX, evt.clientY)
  document.getElementById("testdiv").innerHTML = count++;
  
}
function mup()
{
  mdflag = false;
}

document.addEventListener("mousedown",mdown,false);
document.addEventListener("mouseup",mup,false);

document.addEventListener("click", clicked);

</script>