// // Optimized java implementation of Bubble sort

// class Bubble_sort {
    
//     // An optimized version of Bubble Sort
//     static void bubbleSort(int arr[], int n){
//         int i, j, temp;
//         boolean swapped;
//         for (i = 0; i < n - 1; i++) {
//             swapped = false;
//             for (j = 0; j < n - i - 1; j++) {
//                 if (arr[j] > arr[j + 1]) {
                    
//                     // Swap arr[j] and arr[j+1]
//                     temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                     swapped = true;
//                 }
//             }

//             // If no two elements were
//             // swapped by inner loop, then break
//             if (swapped == false)
//                 break;
//         }
//     }

//     // Function to print an array
//     static void printArray(int arr[], int size){
//         int i;
//         for (i = 0; i < size; i++)
//             System.out.print(arr[i] + " ");
//         System.out.println();
//     }

//     // Driver program
//     public static void main(String args[]){
//         int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
//         int n = arr.length;
//         bubbleSort(arr, n);
//         System.out.println("Sorted array: ");
//         printArray(arr, n);
//     }
// }


import java.io.*;
import java.util.*;

public class Main {

    static FastScanner fs = new FastScanner();
    static PrintWriter out = new PrintWriter(System.out);

    public static void main(String[] args) {
        int t = 1;
        // If multiple testcases:
        // t = fs.nextInt();
        while (t-- > 0) {
            solve();
        }
        out.flush();
    }

    static void solve() {
        // Write your logic here
        for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

    }

    // ---------- FAST SCANNER ----------
    static class FastScanner {
        private final InputStream in = System.in;
        private final byte[] buffer = new byte[1 << 16];
        private int ptr = 0, len = 0;

        private int read() {
            if (ptr >= len) {
                ptr = 0;
                try {
                    len = in.read(buffer);
                } catch (IOException e) {
                    return -1;
                }
                if (len <= 0) return -1;
            }
            return buffer[ptr++];
        }

        int nextInt() {
            int c;
            while ((c = read()) <= ' ') ;
            int sign = 1;
            if (c == '-') {
                sign = -1;
                c = read();
            }
            int val = c - '0';
            while ((c = read()) > ' ') {
                val = val * 10 + (c - '0');
            }
            return val * sign;
        }

        long nextLong() {
            int c;
            while ((c = read()) <= ' ') ;
            int sign = 1;
            if (c == '-') {
                sign = -1;
                c = read();
            }
            long val = c - '0';
            while ((c = read()) > ' ') {
                val = val * 10 + (c - '0');
            }
            return val * sign;
        }

        String next() {
            int c;
            while ((c = read()) <= ' ') ;
            StringBuilder sb = new StringBuilder();
            do {
                sb.append((char)c);
            } while ((c = read()) > ' ');
            return sb.toString();
        }
    }
}
