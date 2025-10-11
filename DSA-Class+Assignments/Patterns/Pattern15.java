import java.util.Scanner;

public class Pattern15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        //first half
        int st = 1;
        int sp = (n * 2) + 1 - 2;
        for (int i = 1; i <= n; i++) {
            int num = n + 1;
            for (int j = 1; j <= st; j++) {
                num--;
                System.out.print(num);

            }
            for (int j = 1; j <= sp; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= st; j++) {
                if (num == 0)
                    num = num++;
                System.out.print(num);
                num++;
            }
            sp = sp - 2;
            st = st + 1;

            System.out.println();
        }

        //center
        int val = n;
        for (int i = 1; i <= ((n * 2) + 1); i++) {
            System.out.print(val);
            if (i > (n))
                val++;
            else
                val--;
        }
        System.out.println();

        //second half
        st=n;
        sp=1;
        for(int i=1;i<=n;i++){
            int num=n+1;
            for(int j=1;j<=st;j++){
                num--;
                System.out.print(num);
            }
            for (int j = 1; j <= sp; j++) {
                System.out.print(" ");
            }
            for(int j=1;j<=st;j++){                
                System.out.print(num);
                num++;
            }
            st=st-1;
            sp=sp+2;
            System.out.println();
        }

        sc.close();
    }
}
