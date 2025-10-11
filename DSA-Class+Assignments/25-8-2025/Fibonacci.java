import java.util.Scanner;
class Fibonacci{
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter any integer:");
      int num=sc.nextInt();
      
      int a=0;int b=1;
      int i=1;
       
      while((a+b)<num){
         int c=a+b;
         System.out.println("Fibonacco["+i+"]->"+c);
         i++;
         a=b;
         b=c;
      }
 sc.close();
    }
}