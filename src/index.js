module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
  return false;}
   var strl = str.length;
   var bracketsConfig = bracketsConfig.length;
   var massiv = [];
    for(let i = 0; i < strl; i++)
    {
      for(let n = 0; n < bracketsConfig; n++)
      {
        if (str[i] == bracketsConfig[n])
        {
        massiv.unshift(str[i]);
     };
        if (str[i] == bracketsConfig[n])
        {
          if (massiv[0] == bracketsConfi[n])
          {
            massiv.shift();
          };
        };
      };
    };
  if (massiv.length !=0) 
 {
 return false; 
  };
    return true;
  };
