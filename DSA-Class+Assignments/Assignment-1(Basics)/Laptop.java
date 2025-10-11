/* Write a program to create a class Laptop with variables brand, ram, processor. Create an object in
 main(), assign values and call methods to display details.
 Sample Output:
 Laptop Brand: HP
 RAM: 16GB
 Processor: Intel i7 */

public class Laptop {
    public static void main(String args[]){
       Laptop1 l=new Laptop1();
        l.setBrand("HP");
        l.setProcessor("Intel i7");
        l.setRam("16GB");
        System.out.println("Laptop Brand:"+l.getBrand());
        System.out.println("Ram:"+l.getRam());
        System.out.println("Processor:"+l.getProcessor()); 
    }
}
class Laptop1{
    String brand;
    String processor;
    String ram;
    void setBrand(String b){
        this.brand=b;
    }
    void setRam(String r){
        this.ram=r;
    }
    void setProcessor(String p){
        this.processor=p;
    }
    String getBrand(){
        return this.brand;
    }
    String getProcessor(){
        return this.processor;
    }
    String getRam(){
        return this.ram;
    }
}
