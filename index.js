let num = "",
  last_operator = false,
  sum = 0;
let text = "",
  list = [];

function calcul(value) 
{
  if (value != "C" && value != "=") 
    text += value;

  if (value == "=") {

    list.push(num);
    let index = 1,n = list.length,grad2 = 0;

    do {
        grad2 = 0;
      for (index = 1; index < n - 1; index++) {

        if (list[index] == "x") {

          let nr1 = Number(list[index - 1]);
          let nr2 = Number(list[index + 1]);
          
          list[index - 1] = String(nr1 * nr2);
          list.splice(index, 2);
          ++grad2, n -= 2, index -= 1;
        }

         else if (list[index] == "/"){
          let nr1 = Number(list[index - 1]);
          let nr2 = Number(list[index + 1]);

          list[index - 1] = String(nr1 / nr2);
          list.splice(index, 2);
          ++grad2, n -= 2, index -= 1;
        }

      }

    } while (grad2 > 0);

    console.log(list);
    n = list.length;
    if(list[0] == '+'|| list[0] == '-')
    {
      for(index = 0;index < n - 1; index += 2)
      {
          if(list[index] == '+')
              sum += Number(list[index + 1]);
          else sum += (-1) * Number(list[index + 1]);
      }
    }
    else{
      sum += Number(list[0]);

      for(index = 1; index < n; index += 2)
      {
        if(list[index] == '+')
          sum += Number(list[index + 1]);
      else sum += (-1) * Number(list[index + 1]);
      }
    }

    text = String(sum),list = [],sum = 0,num = "";
    console.log("text",text);
    list.push(text);
  }

  else if (value == "C") 
    num = "", text="",sum = 0,list=[];

  else if (value >= "0" && value <= "9")
     num += value;
  else {
    if(num != "")
      list.push(num);
    
    list.push(value);
    num = "";
  }

  console.log(list);
  document.getElementById("primurand").innerHTML = text;
}
