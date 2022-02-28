var weight = [35,38,42,45,43,34,36,41,48,32];
var average
var sum=0
function avg (){
  for(var i=0;i<weight.length;i++){
    sum=sum+weight[i]
  }
  average= sum/weight.length
  console.log(average);
}


function setup() {
  createCanvas(400,400);
avg()
}

function draw() 
{
  background(30);
}

 

