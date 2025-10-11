/* Create a class Book with variables title, author, price. Override toString() to print details.
 Sample Output:
 Book Title: Java Basics
 Author: James Gosling
 Price: 500 */


public class Override_toString {
    public static void main(String[] args) {
        Book b=new Book("Java Basics","James Gosling",500);
        System.out.println(b);
    }
}

class Book{
    String title;
    String author;
    int price;
    public Book(String t, String a, int p){
        this.title=t;
        this.author=a;
        this.price=p;
    }

    @Override
     public String toString(){
        return "Book Title: "+this.title+"\n"+"Author: "+this.author+"\n"+"Price: "+this.price;
    }
}
