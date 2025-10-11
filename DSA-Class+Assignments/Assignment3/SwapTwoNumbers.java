import java.util.Scanner;

public class SwapTwoNumbers {
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      int a=sc.nextInt();
      int b=sc.nextInt();

         //using add and sub

         a=a+b;
         b=a-b;
         a=a-b;
        System.out.println("a="+a +" b="+b);

        //using mul and div

        a=a*b;
        b=a/b;
        a=a/b;
         System.out.println("a="+a +" b="+b);

        //xor operator
         a=a^b;
         b=a^b;
         a=a^b;
          System.out.println("a="+a +" b="+b);

      sc.close();
    }
}
