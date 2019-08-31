import java.util.ArrayList;
import java.util.Collections;
public class WrapPresent{
	public static int wrap(int height, int width, int length){
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(height); list.add(width); list.add(length);
        Collections.sort(list);
        
        return 2*(height+width+length+list.get(0))+20;
  }
}