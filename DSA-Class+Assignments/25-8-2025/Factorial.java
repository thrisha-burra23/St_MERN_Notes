import java.util.Scanner;
class Factorial{
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter an integer:");
      int num=sc.nextInt();
      for(int i=num-1;i>=1;i--){
        num=num*i;
      }
      System.out.println(num);
 sc.close();
    }
}