import java.util.Scanner;

public class Pattern14 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n =  sc.nextInt();

        int st = 1;
        int sp = (n - 1) + (n - 2);

        for (int r = 1; r <= n; r++) {
            int num = r;
            for (int c = 0; c < st; c++) {
                System.out.print(num);
                num--;
            }
            for (int c = 1; c <= sp; c++) {
                System.out.print(" ");  
            }
            num = 1;
            for (int c = 1; c <= st; c++) {
                if (r == n && num == 1){
                    num = num + 1;
                    c++;
                }
                System.out.print(num);
                num++; 
            }
            sp = sp - 2;
            st = st + 1;
            System.out.println();
        }
        sc.close();
    }
}
