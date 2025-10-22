public class p {
    public static void main(String[] args) {
        int n=5;
        int spaces=0,stars=n;
        for(int i=0;i<=n;i++){
            for(int j=0;j<spaces;j++){
                System.out.print(" ");
            }
            for(int k=0;k<stars;k++){
                System.out.print("*");
            }
            spaces++;
            stars--;
            System.out.println();
        }
    }
}
