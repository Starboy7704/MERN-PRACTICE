
import java.util.Scanner;
import java.util.Stack;



public class Program2 {
    public static void main(String[] args) {
        Stack<String> s = new Stack<>();
        Scanner sc = new Scanner(System.in);
        while(!s.push(sc.next()).equals("stop")){
            //s.push(sc.next());
        }
        System.out.println(s);
        s.pop();
        s.pop();
        System.out.println(s);
        String ele = s.peek();
        System.out.println(ele);
        System.out.println(s.isEmpty());

        sc.close();


    }
}
