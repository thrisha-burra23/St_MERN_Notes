import java.util.Scanner;

public class Pattern8 {
       public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sp=n-1;
        int st=1;

        for (int r = 1; r <= n; r++) {          
            for (int col = 0; col < sp; col++) {
                System.out.print(" ");
            } 
            int num=0;
             for (int col = 0; col < st; col++) {
                 if(col<=st/2)
                 num++;
                 else num--;
                 System.out.print(num);
               
            } 
            

            sp=sp-1;
            st=st+2;
            System.out.println();
        }
 
        sc.close();
    }
}
