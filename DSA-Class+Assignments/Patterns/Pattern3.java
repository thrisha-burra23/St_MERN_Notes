import java.util.Scanner;

public class Pattern3 {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            int val = n;
            for (int j = 0; j < n; j++) {
                System.out.print(val);
                val--;
            }
            System.out.println();
        }

        sc.close();
    }
}
