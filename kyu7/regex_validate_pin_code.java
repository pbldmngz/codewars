public class Solution {
    //I FUCKING HATE JAVA, ID EVEN KNOW WHY IT EXIXTS//JK I ACTUALLY LIKE IT NOW
    public static boolean validatePin(String pin) {
          String pos = "";
          for (int i = 0; i < pin.length(); i++){
              pos += pin.charAt(i);
            if (pos.matches("[0-9]") == false){
              return false;
            }
              pos = "";
          }
          if(pin.length()==6 || pin.length()==4){
              System.out.println(pin);
              return true;
          }else {return false;}
        }
  
  }