function solution(input, markers) 
{
   return input.split('\n').map((line,index) => 
   {
     markers.map(mark => 
     {
       let pos = line.indexOf(mark) != -1 ? line.indexOf(mark) : null;
       line = pos ? line.slice(0, pos) : line;
     });
     return line.trim();
   }).join('\n');
};