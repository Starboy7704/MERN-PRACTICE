
public class SetBitCount {

    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            if ((n & 1) != 0) {
                count++;
            }
            n >>= 1;
        }
        return count;
    }

    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // System.out.print("Enter a number: ");
        // System.out.println("Number of set bits: " + countSetBits(sc.nextInt()));

        countSetBits(10);
        // sc.close();
    }
}
