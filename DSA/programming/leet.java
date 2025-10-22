public class leet {
    public static void main(String[] args) {
        int[] nums = {3,3};
        int val =3;
        int j=nums.length - 1;
        int i=0;
        // System.out.println(nums[j]);
        while(i<j){
            if(nums[j]==val){
                j--;
                
            }
            if(nums[i]==val){
                nums[i]=nums[i]^nums[j];
                nums[j]=nums[i]^nums[j];
                nums[i]=nums[i]^nums[j];//this will not work for some edge case
            }
            i++;
        }
        int c=0;
        for(int k=0;k<nums.length;k++){
            if(nums[k]!=val){
                c++;
            }
            else if (nums[k]==val){
                // if(c==0){
                //     c-=1;
                //     break;
                // }
                // else{
                //     break;
                // }
                break;
            }
        }
        System.out.println(c);
    }
}
