public class p6 {
//    1
//   121
//  12321
// 1234321
    public static void main(String[] args) {
        int n=5;
        int sp = n-1;
        for(int i=0;i<n;i++){
            for(int j=0;j<sp;j++){
                System.out.print(" ");
            }
           for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }

            // print descending numbers
            for (int j = i - 1; j >= 1; j--) {
                System.out.print(j);
            }
            // for(int j=0;j<sp;j++){
            //     System.out.print(" ");
            // }
            System.out.println();
            sp-=1;
        }
    }
}
