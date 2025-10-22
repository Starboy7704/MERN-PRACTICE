public class subarray {
    public static void main(String[] args) {
        int [] arr = {-2,1,-3,4,-1,2,1,-5,4};
        int n=arr.length;
        int curr_sum=0;
        int max_sum=Integer.MIN_VALUE;
        int st=0,end=0;
        for(int i=0;i<n;i++){
            curr_sum+=arr[i];
            if(curr_sum>max_sum){
                max_sum=curr_sum;
                end=i;
            }
            if(curr_sum<0){
                curr_sum=0;
                st=i+1;
                end=i;
            }
        }
        System.out.println("start index:"+st+" end index :"+end);
        System.out.println(max_sum);
    }
}
