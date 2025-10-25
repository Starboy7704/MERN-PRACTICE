public class Boundary{
    public static void main(String[] args) {
        int[][] arr = {{1,2,3,4},
                        {5,6,7,8},
                        {9,10,11,12},
                        {13,14,15,16}};

        int rl = arr.length;
        int cl = arr[0].length;
        // System.out.println(rl);
        // System.out.println(cl);
        for(int c=0;c<cl-1;c++){
            System.out.println(arr[0][c]);
        }
        for(int r=0;r<rl;r++)
        {
            System.out.println(arr[r][cl-1]);
        }
        for(int r=rl-1;r>0;r--){
            System.out.println(arr[rl-1][r]);
        }
        for(int c=cl-1;c>0;c--){
            System.out.println(arr[c][0]);
        }
    }
}