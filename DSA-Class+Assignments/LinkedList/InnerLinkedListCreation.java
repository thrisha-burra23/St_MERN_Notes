import java.util.ArrayList;
//import java.util.LinkedList;

class LinkedListCreation {
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ArrayList<Integer> al = new ArrayList<>();
        for (int i = 0; i < 6; i++) {
            al.add(i);
        }
        LinkedList dummy = new LinkedList(-1, null);
        LinkedList head = new LinkedList();
    }
}

class LinkedList {
    int data;
    LinkedList next;
}