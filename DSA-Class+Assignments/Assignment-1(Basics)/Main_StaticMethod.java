/*  Write a program to show why main() must be static. Try creating a method without static and see
 why it doesn’t run. Fix it using static. */


public class Main_StaticMethod {
    public static void main(String[] args){
         
        System.out.println("hello");
       System.out.println( add(10));
    }

     static int add(int a){
            return a;
        }
         
}
