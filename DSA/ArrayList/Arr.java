package ArrayList;

import java.util.ArrayList;

 class Arr {
    public static void main(String[] args) {
        ArrayList<Integer> al = new ArrayList<>();
        System.out.println(al.size());
        System.out.println(al);

        al.add(10);
        al.add(20);
        al.add(30);
        al.add(40);
        al.add(50);
        al.add(60);
        al.add(70);
        al.add(80);
        
        System.out.println(al);
        System.out.println(al.size());

        for(int i=al.size()-1;i>=0;i--){
            if(i%2==0){
                al.remove(i);
            }
            
        }
        System.out.println(al);

        

    }
}
