import java.util.Scanner;

public class p4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n= sc.nextInt();
        int max= Integer.MIN_VALUE;
        while(n>0){
            int a=sc.nextInt();
            if(a>max){
                max=a;
            }
            n--;
        }
        System.out.println("largest number:"+max);
    }
}
