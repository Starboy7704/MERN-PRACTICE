public class pat {
    public static void main(String[] args) {
        int n=4;
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
        
    }
}
