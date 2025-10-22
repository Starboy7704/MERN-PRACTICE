import java.util.Scanner;

public class arr {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n value:");
        int n=sc.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<n;i++){
            System.out.println("Enter value at arr["+i+"]:");
            arr[i]=sc.nextInt();
        }
        System.out.println("contents of the array:");
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }        
    }
}
