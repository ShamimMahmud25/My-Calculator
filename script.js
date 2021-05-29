function getInput()
{
     return document.getElementById("inputvalue").innerText;
}
function printInput(num)
{
    document.getElementById("inputvalue").innerHTML=num;
}
function getOutput()
{
     return document.getElementById("outputvalue").innerText;
}
function printOutput(num)
{
    if(num=="")
    {
        document.getElementById("outputvalue").innerHTML=""; 
    }
    else
    {
        document.getElementById("outputvalue").innerHTML=getFormattedNumber(num);
    }
    
}
function getFormattedNumber(num)
{
    if(num=="-")
    return "";
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}

function reverseNumberformat(num)
{
    
 return Number(num.replace(/,/g,''));
}
var operator =document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function()
    {
        if(this.id=="AC")
        {
            printOutput("");
            printInput("");
        }
       else if(this.id=="DEL")
        {
            var output=reverseNumberformat(getOutput()).toString();
            if(output)
            {
                output=output.substr(0,output.length-1);
            }
            printOutput(output);
        }
        else 
        {
          var output=getOutput();
          var input=getInput();
          
          
          if(output!="")
          {
              output=reverseNumberformat(output);
              input=input+output;
              if(this.id=="=")
              {
                  var result=eval(input);
                  if(result=="")
                  {
                    printOutput("0");
                  }
                  
                  else
                  {
                    printOutput(result);
                  }
                  
                  printInput("");
              }
              else
              {
                  input=input+this.id;
                  printInput(input);
                  printOutput("");
              }
          }
        }
        
    })
}
var number =document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function()
    {
        var output=reverseNumberformat(getOutput());
       
        if(output!=NaN)
        {
            output=output+this.id;
        }
           
        
        printOutput(output);
    })
}