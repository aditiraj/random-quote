var arrObj=[{quote:"The best preparation for tomorrow is doing your best today.",color:"yellow",writer:"H. Jackson Brown, Jr.",txtColor:"#0066cc"},
{quote:"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",color:"#cc6666",writer:"Buddha",txtColor:"purple"},
{quote:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",color:"#339966",writer:"Jimmy Dean",txtColor:" #cc0000"},
{quote:"Believe you can and you're halfway there.",color:" #99cc33",writer:"Theodore Roosevelt",txtColor:"#ff0066"},
{quote:"When deeds speak, words are nothing.",color:" #9999ff",writer:"Pierre-Joseph Proudhon",txtColor:"#990066"},
{quote:"If opportunity doesn't knock, build a door.",color:"#cc9966",writer:"Milton Berle",txtColor:" #669933"},
{quote:"Whoever is happy will make others happy too.",color:"#999966",writer:"Anne Frank",txtColor:"#993366"},
{quote:"The things that we love tell us what we are.",color:" #000033",writer:"Thomas Aquinas",txtColor:"#663333"},
{quote:"The undertaking of a new action brings new strength.",color:"#66ccff",writer:"Richard L. Evans",txtColor:"#cc3366"},
{quote:"The only journey is the one within.",color:" #ffcc00",writer:"Rainer Maria Rilke",txtColor:"#ff6633"}];

$(document).ready(function(){
  
 $("#quote").addClass("saying");
 $("#author").addClass("person");
  generateQuote();
  
  $("#quoteButton").click(function(){
    generateQuote();
  });  
  });
  
function generateQuote(){
 var index=generateRandomNum(arrObj.length);
 writeQuote(index);
}


function generateRandomNum(num){
  return (Math.floor(Math.random()*num));
}

function writeQuote(index){
  $("#quote").html("<q>"+arrObj[index].quote+"</q>");
  $("#author").html("-"+arrObj[index].writer);
  $("#text").css("color",arrObj[index].txtColor);
  $("#main").css("background-color",arrObj[index].color);
  $("#tweetLink").attr("href","https://twitter.com/intent/tweet?text="+arrObj[index].quote);
}
