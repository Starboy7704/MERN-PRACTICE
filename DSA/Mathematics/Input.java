import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        String name = sc.next();
        int r_no = sc.nextInt();
        System.out.println(r_no );
        System.out.println(name);
        sc.close();
        
    }
}
