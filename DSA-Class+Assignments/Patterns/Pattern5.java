import java.util.Scanner;

public class Pattern5 {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int rval = 1;
        for (int i = 1; i <= n; i++) {  
            int cval=rval;          
            for (int j = 0; j < n; j++) {
                System.out.print(cval+" ");
                cval++;
            }
            rval+=n;
            System.out.println();
        }

        sc.close();
    }
}
