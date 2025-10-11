/*
   Reverse Student Names using Stack
 Problem:
 Take student names as input until the user enters stop. Store them in an ArrayList. Then push all
 names into a Stack and finally pop them one by one to display names in reverse order.
 Input Format (sample):
 Ram
 Sita
 Krishna
 Lakshman
 stop
 Output (sample):
 Names in ArrayList: [Ram, Sita, Krishna, Lakshman]
 Names in Reverse Order (using Stack):
 Lakshman
 Krishna
 Sita
 Ram
 */

import java.util.*;
public class ReverseUsingStack {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        ArrayList<String> al=new ArrayList<>();
        Stack<String> stack=new Stack<>();
        String name="";

        //entering into string
        while(!name.equals("stop")){
            name=sc.nextLine();
            al.add(name);
        }

        System.out.println("Names in ArrayList:"+al);

        //pushing names into stack
        for(int i=0;i<al.size();i++){
            stack.push(al.get(i));
        }

        //popping and displaying them in reverse order
        stack.pop();
        System.out.println("Reverse order of names");
        while(!stack.isEmpty()){
            System.out.println(stack.pop());
        }

        sc.close();
    }
}
