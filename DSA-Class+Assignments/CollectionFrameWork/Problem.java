

import java.util.ArrayList;
import java.util.Scanner;
public class Problem {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        Scanner input = new Scanner(System.in);
        while (true) {
            displayMenu();
            int choice = input.nextInt();
            if (choice == 1) {
                System.out.print("Enter an integer to add to the list: ");
                int value = input.nextInt();
                list.add(value);
                System.out.println(value + " added to the list.");
            } else if (choice == 2) {
                System.out.print("Enter an integer to remove from the list: ");
                int value = input.nextInt();
                if (list.remove(Integer.valueOf(value))) {
                    System.out.println(value + " removed from the list.");
                } else {
                    System.out.println(value + " not found in the list.");
                }
            } else if (choice == 3) {
                System.out.println("Current list: " + list);
            } else if (choice == 4) {
                System.out.println("Exiting program.");
                break;
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void displayMenu()

    {
        System.out.println("\nMenu:");
        System.out.println("1. Add an integer to the list");
        System.out.println("2. Remove an integer from the list");
        System.out.println("3. Display the list");
        System.out.println("4. Exit");
        System.out.print("Enter your choice: ");
    }

}