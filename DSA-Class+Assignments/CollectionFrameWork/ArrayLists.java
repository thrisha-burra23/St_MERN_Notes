/*
 *  Q1: Student Management using ArrayList
 Problem:
 You are given a class Student with attributes rollNo and name. Create an ArrayList and perform the
 following operations:
 1 Add students dynamically (take rollNo and name as input until the user enters -1 as rollNo).
 2 Display all students.
 3 Search for a student by rollNo.
 4 Update a student’s name by rollNo.
 5 Remove a student by rollNo.
 Input Format (sample):
 101 Ram
 102 Sita
 103 Krishna-1
 2
 102
 4
 103 Arjun
 5
 101
 Output (sample):
 Students Added Successfully!
 All Students:
 101 Ram
 102 Sita
 103 Krishna
 Search Result: Student Found → 102 Sita
 After Update:
 101 Ram
 102 Sita
 103 Arjun
 After Removal:
 102 Sita
 103 Arjun
 Q2: Stack of B
 */

import java.util.*;

public class ArrayLists {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Student> al = new ArrayList<>();

        // adding elaments into ArrayList
        while (true) {
            int id = sc.nextInt();
            if (id == -1)
                break;
            String name = sc.nextLine();
            Student s = new Student(id, name);
            al.add(s);
        }
        System.out.println("Students Added Successfully!");

        // displaying all elements
        
        System.out.println("All Students:");
        for (int i = 0; i < al.size(); i++) {
            System.out.print(al.get(i).id + " ");
            System.out.println(al.get(i).name );
        }
    

        //Searching a student using a roll no.
        int roll=sc.nextInt();        
        for(int i=0;i<al.size();i++){
            if( (al.get(i).id)==roll){
                System.out.println(al.get(i).id + " "+ al.get(i).name);
                break;
            }
            if(i==al.size()-1 && (al.get(i).id)!=roll){
                System.out.println("Not Found");
            } 
        }

        //updating student's name by roll no.
        int update=sc.nextInt();
        String nameUpdate=sc.next();
        for(int i=0;i<al.size();i++){
            if(al.get(i).id==update){
                al.get(i).name=nameUpdate;
                break;
            }
        }
         System.out.println("Updated List:");
        for (int i = 0; i < al.size(); i++) {
            System.out.print(al.get(i).id+ " ");
            System.out.println(al.get(i).name );
        }

        //removing an element
        int delete=sc.nextInt();
        for(int i=0;i<al.size();i++){
            if(al.get(i).id==delete){
                al.remove(i);
                break;
            }
        }
         System.out.println("Updated List after Removing...");
        for (int i = 0; i < al.size(); i++) {
            System.out.print(al.get(i).id + " ");
            System.out.println(al.get(i).name );
        }

        sc.close();
    }

    public static class Student {
        int id;
        String name;

        Student(int id, String name) {
            this.id = id;
            this.name = name;
        }
    }
}
