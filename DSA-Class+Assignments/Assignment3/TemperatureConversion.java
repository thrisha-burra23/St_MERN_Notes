 package Assignment3;

import java.util.Scanner;
public class TemperatureConversion {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Celsius=");
        float c=sc.nextInt();
        float f=(c * 9/5) + 32;
        System.out.println("Fahrenheit:"+f);
        sc.close();
    }
}
