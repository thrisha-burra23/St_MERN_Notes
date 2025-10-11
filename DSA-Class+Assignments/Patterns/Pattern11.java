import java.util.Scanner;

public class Pattern11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int row = 1;
        int c = 1;
        for (int i = 0; i < n; i++) {
            int col=row;
            for (int j = 0; j < n; j++) {
                System.out.print(col+" ");
                if (c == 1) {
                   col++;
                } else { 
                   col--;
                }
            }

            if (c == 1) {
                row = row+((n*2)-1);
                c = 1 - c;
            } else {
                row = row + 1;
                c=1+c;
            }
            System.out.println();
        }

        sc.close();
    }
}
