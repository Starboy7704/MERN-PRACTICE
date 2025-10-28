import java.util.HashMap;
import java.util.Map;

public class hp {
    public static void main(String[] args) {
        Map<Integer,String> mp = new HashMap<>();
        mp.put(1, "sai");
        mp.put(3,"praneeth");
        mp.put(2,"Starboy");
        System.out.println(mp);
        System.out.println(mp.get(3));
        mp.putIfAbsent(4, "ram");
        System.out.println(mp);
        //values are being stored according to key order (in ascending order)
        System.out.println(mp.keySet());
        System.out.println(mp.values());


        for(Integer e:mp.keySet()){
            System.out.println(mp.get(e));
        }
        System.out.println(mp.getOrDefault(3, "empty"));
        // say for example we are trying to access key 4 as it is empty it will return "empty".
        System.out.println("Set View: " + mp.entrySet());

    }
}
