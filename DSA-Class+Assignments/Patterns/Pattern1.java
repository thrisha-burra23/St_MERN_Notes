import java.util.*;

class Pattern1{
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        int val=1;
        for(int i=1;i<=n;i++){
            for(int j=0;j<n;j++){
                System.out.print(val);
            }
           val++;
            System.out.println();
            
        }

        sc.close();
    }
}