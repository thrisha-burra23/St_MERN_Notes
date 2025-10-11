/*Sum of Two Numbers
 Take two integers as input using Scanner and print their sum.
 Sample Input:
 Enter first number: 10
 Enter second number: 25
 Sample Output:
 Sum = 35 */

import java.util.Scanner;
public class SumOfTwoNumbers {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter first number:");
        int a=sc.nextInt();
        System.out.println("Enter second number:");
        int b=sc.nextInt();
        System.out.println("Sum = "+(a+b));
        sc.close();
    }
}
