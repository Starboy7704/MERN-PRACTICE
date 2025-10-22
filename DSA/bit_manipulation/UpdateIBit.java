public class UpdateIBit {

    public static int setBit(int n, int idx) {
        int bitMask = 1 << idx;
        return n | bitMask;
    }

    public static int clearBit(int n, int idx) {
        int bitMask = ~(1 << idx);
        return n & bitMask;
    }

    public static int updateBit(int n, int idx, int newBit) {
        if (newBit == 0) {
            return clearBit(n, idx);
        } else {
            return setBit(n, idx);
        }
    }

    // Another way to do it:
    // n = clearBit(n, idx);
    // int bitMask = newBit << idx;
    // return n | bitMask;

    public static void main(String[] args) {
        System.out.println(updateBit(10, 2, 1));
    }
}
