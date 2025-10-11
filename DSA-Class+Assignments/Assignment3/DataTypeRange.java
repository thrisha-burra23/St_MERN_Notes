package Assignment3;
import java.util.Scanner;
public class DataTypeRange {
    public static void main(String[] args) {
         Scanner sc=new Scanner(System.in);
         System.out.println("Enter byte");
         byte b=sc.nextByte();
         short s=sc.nextShort();
         int i=sc.nextInt();
         long l=sc.nextLong();
         float f=sc.nextFloat();
         double d=sc.nextDouble();
        System.out.println("Byte:"+b+" Range: "+Byte.MIN_VALUE+" to "+Byte.MAX_VALUE);
        System.out.println("Short:"+s+" Range: "+Short.MIN_VALUE+" to "+Short.MAX_VALUE);
        System.out.println("Int:"+i+" Range: "+Integer.MIN_VALUE+" to "+Byte.MAX_VALUE);
        System.out.println("Long:"+l+" Range: "+Long.MIN_VALUE+" to "+Long.MAX_VALUE);
        System.out.println("Float:"+f+" Range: "+Float.MIN_VALUE+" to "+Float.MAX_VALUE);
        System.out.println("Double:"+d+" Range: "+Double.MIN_VALUE+" to "+Byte.MAX_VALUE);
        sc.close();
    }
}
