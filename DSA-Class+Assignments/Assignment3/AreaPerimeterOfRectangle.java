package Assignment3;

import java.util.Scanner;
public class AreaPerimeterOfRectangle {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Length:");
        int l=sc.nextInt();
        System.out.println("Breadth:");
        int b=sc.nextInt();
        System.out.println("Area:"+(l*b));
        System.out.println("Perimeter:"+(2*(l+b)));
        sc.close();
    }
}
