import java.util.Scanner;

public class p7 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int f = 0;
        int s = 1;
        int t = f + s;
        int n = 10;
        while (t < n) {
            f = s;
            s = t;
            t = f + s;
            System.out.println(" " + t);

        }
        sc.close();
    }
}
