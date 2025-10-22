public class count_digits {
    public static void main(String[] args) {
        int [] digits = new int[] {9,0,9,0,9};
        int n = digits.length;
        
        // Traverse from the end
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {  // No carry needed
                digits[i]++;
                System.out.println(digits[i]);
                // return digits;
            }
            digits[i] = 0;  // Set to 0 and carry over
        }
        
        // If all digits are 9, then we have carry over for all digits
        int[] newNumber = new int[n + 1];
        for(int i=digits.length-1;i>=0;i--){
            System.out.println(digits[i]);
        }
        System.out.println();
        newNumber[0] = 1;  // e.g. 999 + 1 = 1000
        for(int i=newNumber.length-1;i>=0;i--){
            System.out.println(newNumber[i]);
        }
        // return newNumber;
    }
}

