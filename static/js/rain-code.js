// TODO: remove jquery
$(':root').css('--steps',((1000+400)/25).toString());

let content = document.getElementById("body-background");
let randoms = [];
for(let i=0 ; i<140; i++){
  randoms.push(Math.random());
  let column = document.createElement("div");
  column.className= 'column';
  let veil = document.createElement("veil");
  veil.className= 'veil';
  column.appendChild(veil);
  for(let j=0; j<70; j++){
    let letter = document.createElement("div");
    letter.className= 'letter';
    letter.innerHTML = String.fromCharCode(Math.round(Math.random()*92 +33));
    column.appendChild(letter);

  }
  content.appendChild(column);
}

function initElement(index,element){
      let $element = $(element);
      $element.css('--veil-space', (25* Math.round(Math.random()*12 +6)).toString() + "px");
      let n = randoms[index]*10000;
      setTimeout(() =>{
        $element.addClass('animate');
      },n);
      setTimeout(() =>{
        $element.removeClass('animate');
      },n+14500);
}
function initColumns(){
  $('.veil').each((index,element)=>{
      console.log('h');
    initElement(index,element);
    setInterval(() => {
        initElement(index,element);
      },15000)
  });
}
initColumns();