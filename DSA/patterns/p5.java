public class p5 {
    // 1
    // 01
    // 010
    // 1010
    // 10101

    public static void main(String[] args) {
        int n=5,b=1;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if(b==1){
                    System.out.print(b);
                    b=0;
                }
                else if(b==0){
                    System.out.print(b);
                    b=1;
                }
                
            }
            System.out.println();
        }

    }
}
