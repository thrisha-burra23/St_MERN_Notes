import java.util.Scanner;

public class Pattern10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        int sp=(n-1)+(n-2);
        for (int i = 1; i <= n; i++) {  
            int num=0;
             for(int j=1;j<=i;j++){
                 num++;
                System.out.print(num);
             }
             for(int j=1;j<=sp;j++){
                System.out.print(" ");
             }
             for(int j=i;j>=1;j--){     
                if(j==n)
                j=i-1;            
                System.out.print(j);
             }
             sp=sp-2;
             System.out.println(); 
        }
        sc.close(); 
    }
}
