/* Stack vs Heap Demo
Create a class Student with name and roll number. Create two objects and print them without
 overriding toString(). Override toString() and print again.
 Sample Output:
 Without overriding: Student@372f7a8d
 With overriding: Name: Rahul, Roll: 101 */

public class StackVsHeap {
    public static void main(String[] args){
       Student a=new Student("Rahul", 101);
       System.out.println(a); 
    }
}
 class Student{
    String name;
    int roll;
    public Student(String s, int roll){
        this.name=s;
        this.roll=roll;
    }

    /* *toString() used to display content inside objects
       * before writing this method if we print object a we will get an address of that onject
       * so we are overriding it using toString() to display/access content inside the object
       * the address we get before is stored in stack memory where the actual content is stored in heap memory
    */
    @Override 
    public String  toString(){
        return "Name: "+this.name+" RollNo.: "+this.roll; 
    }

 }
