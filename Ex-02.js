const qs = "7*4-2+2";

function equation(qs){
   let chars = qs.split('+').toString();
   chars = chars.split('-').toString();
   chars = chars.split('*').toString();
   chars = chars.split(',');
   let m = [];
   let num;
   for(let i=0 ; qs.length != i ; i++){
       if (qs[i] == "+"){
           m.push(qs[i]);
        }
        else if (qs[i] == "-"){
            m.push(qs[i]);
         }
        else if (qs[i] == "*"){
            m.push(qs[i]);
         }
   }
   for(let i=0 ; chars.length != i ; ++i){
       if (m[i] == "*"){ 
        chars[0] = parseInt(chars[0])*parseInt(chars[i+1]);
        num = chars[0];
       }
       else if (m[i] == "+"){
        chars[0] = parseInt(chars[0])+parseInt(chars[i+1]);
        num = chars[0];
       }
       else if (m[i] == "-"){
        chars[0] = parseInt(chars[0])-parseInt(chars[i+1]);
        num = chars[0];
       }
   }
   return(num);
    }
 console.log(equation(qs));