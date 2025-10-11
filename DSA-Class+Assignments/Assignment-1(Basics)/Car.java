/* Create a class Car with variables: brand, model, price. Create methods to set values and display
 them.
 Sample Output:
 Car Brand: Tesla
 Car Model: Model S
 Car Price: 80000 */

public class Car {
       public static void main(String[] args) {
         ICar c=new ICar();
        c.setBrand("Tesla");
        c.setModel("Model S");
        c.setPrice(80000);
        System.out.println("Car Brand:"+c.getBrand());
        System.out.println("Car Model:"+c.getModel());
        System.out.println("Car Price:"+c.getPrice());
       }
}

class ICar {
    String brand;
    String model;
    int price;
    void setBrand(String b){
        this.brand=b;
    }
     void setModel(String m){
        this.model=m;
    }
     void setPrice(int p){
        this.price=p;
    }
     String getBrand(){
        return this.brand;
     }
      String getModel(){
        return this.model;
     }
      int getPrice(){
        return this.price;
     }
}
