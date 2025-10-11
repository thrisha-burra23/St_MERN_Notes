import java.util.Scanner;
public class OddAndEvenSum {
    public static void main(String[] args) {
       Scanner sc=new Scanner(System.in);
    System.out.println("enter n:"); 
       int num=sc.nextInt( );
       int sum=0; 
       for(int i=1;i<=num/2;i++){
        if(i%2!=0){
            sum=sum+i;
        }
       }

       for(int i=num/2;i<=num;i++){
        if(i%2==0){
            sum=sum+i;
        }
       }
       System.out.println(sum);
       sc.close();
    }
   
}
