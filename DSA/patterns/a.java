public class a {
    public static void main(String[] args) {
        int n=7;
        int sp=(n*2)-3;
        for(int i=0;i<n;i++){
            for(int j=i;j>0;j--){
                System.out.print(j);
            }
            for(int j=0;j<sp;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                
                if (i == n-1 && j == 1) {
                    //i+=1;
                    j+=1;
                }
                System.out.print(j);
            }
            sp-=2;
            System.out.println();
        }
        sp=1;
        for(int i=n-1;i>=0;i--){
            for(int j=i-1;j>0;j--){
                System.out.print(j);
            }
            for(int j=0;j<sp;j++){
                System.out.print(" ");
            }
            for(int j=1;j<i;j++){
                System.out.print(j);
            }
            sp+=2;
            System.out.println();
        }
    }
}
