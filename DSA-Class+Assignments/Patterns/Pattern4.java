import java.util.Scanner;

public class Pattern4 {
    
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            int val = 1;
            for (int j = 0; j < n; j++) {
                System.out.print(val);
                if(val<=0)
                val++;
                else val--;
            }
            System.out.println();
        }

        sc.close();
    }
}
