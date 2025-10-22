public class arm {
    static boolean isPrime(long n){
        if(n==1)return false;
        else if(n==2 || n==3) return true;
        else if(n%2==0 || n%3==0) return false;
        else{
            for(long i=5;i<Math.sqrt(n);i=i+6){
                if(n%i==0||n%i+2==0){
                    return false;
                }
            }
        }
        return true;

    }
    public static void main(String[] args) {
        long n=92;
        for(long i =1;i<=n;i++){
            if( isPrime(i) ==true){
                System.out.println(i);
            }
        }
        
    }
}
