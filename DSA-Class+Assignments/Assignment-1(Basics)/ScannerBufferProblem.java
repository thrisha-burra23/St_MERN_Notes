/* Scanner Buffer Problem (Important)
 When mixing integer and string input, Scanner leaves a newline (\n) in the buffer which causes
 issues. Write a program to solve this: - Take an integer age using nextInt() - Then take a string
 name using nextLine() - Fix the buffer issue properly by consuming the newline.
 Sample Input:
 Enter age: 21
 Enter name: Prudhvi
 Wrong Output (if buffer not handled):
 Age: 21
 Name:
 Correct Output (after fixing):
 Age: 21
 Name: Prudhvi */

import java.util.Scanner;
public class ScannerBufferProblem {
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      int a=sc.nextInt();
    //   String s=sc.nextLine();
      String str=sc.nextLine();// using next takes value but up to white spaces
      System.out.println(a);
      System.out.println(str);  
      sc.close();
    }
}
