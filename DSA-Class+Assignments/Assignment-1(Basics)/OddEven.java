/* ake an integer input using Scanner and print if it is Odd or Even.
 Sample Input:
 Enter number: 12
 Sample Output:
 12 is Even */

 import java.util.Scanner;
public class OddEven {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number: ");
        int num=sc.nextInt();
        if(num%2==0){
            System.out.println(num + " is Even");
        }else{
            System.out.println(num + " is Odd");
        }

        sc.close();
    }
}
