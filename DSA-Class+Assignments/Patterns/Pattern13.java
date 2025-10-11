import java.util.Scanner;

public class Pattern13 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
         int n=7;//sc.nextInt();
        int half=(n/2)+1;
        for(int r=1;r<=n;r++){ 
            for(int c=1;c<=n;c++){
                if((r==1&& c==half)||(r==half&&c==1)|| (r==half&&c==n)||(r==n&&c==half)||
                    (r+c==(half+1)) 
                ){
                    System.out.print("* ");
                }else{
                    System.out.print("# ");
                }
            }
            System.out.println();
        }
        sc.close();
    }
}
