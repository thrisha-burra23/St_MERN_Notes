/*  Write a program that takes input of name, age, and city using Scanner and prints details.
 Sample Input:
 Enter name: Ramesh
 Enter age: 21
 Enter city: Vizag
 Sample Output:
 Name: Ramesh
 Age: 21
 City: Viza */

 import java.util.Scanner;
public class ScannerBasics {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter name:");
        String name=sc.next();
        System.out.println("Enter age");
        int age=sc.nextInt();
        System.out.println("Enter city:");
        String city=sc.next();

        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.println("City: "+city);

        sc.close();
    }
}
 
