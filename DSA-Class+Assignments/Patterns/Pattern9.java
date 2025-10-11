import java.util.Scanner;

public class Pattern9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        int sp=n-1;
        for (int i = 1; i <= n; i++) {  
            int num=0;
             for(int j=1;j<=i;j++){
                 num++;
                System.out.print(num);
             }
             for(int j=1;j<=sp*2;j++){
                System.out.print(" ");
             }
             for(int j=1;j<=i;j++){
                System.out.print(num);
                num--;
             }
             sp=sp-1;
             System.out.println(); 
        }
        sc.close();
    }
}
