/*
    Stack of Books
 Problem:
 Create a Stack to store book names. Perform the following operations based on user input:
 1 Push book names into the stack until the user enters stop.
 2 Pop the top 2 books and display them.
 3 Peek at the top element.
 4 Check if the stack is empty.
 Input Format (sample):
 Java
 DSA
 Python
 DBMS
 OS
 stop
 Output (sample):
 Books in stack: [Java, DSA, Python, DBMS, OS]
 Popped: OS
 Popped: DBMS
 Peek: Python
 Is Stack Empty? false
 */

import java.util.*;

public class StackOfBooks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Stack<String> stack = new Stack<>();
        String bookName = "";

        // pushing book sinto stack
        while (!bookName.equals("stop")) {
            bookName = sc.next();
            stack.push(bookName);
        }

        // displaying books in stack
        stack.pop();
        System.out.println(stack);

        // poping top 2 elements from stack
        System.out.println("Popped:" + stack.pop());
        System.out.println("Popped:" + stack.pop());

        // displaying peek element
        System.out.println("Peek:" + stack.peek());

        // is stack empty
        System.out.println("Is Stack Empty:" + stack.isEmpty());

        sc.close();
    }
}
