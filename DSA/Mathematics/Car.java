public class Car {

    String brand;
    String model;
    int price;

    public void vehicle(String brand, String model , int price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    public void dispaly(){
        System.out.println("car brand:"+brand);
        System.out.println("car model:"+model);
        System.out.println("car price:"+price);
    }
    public static void main(String[] args){
        Car obj =new Car();
        obj.vehicle("Tesla", "S",35000);
        obj.dispaly();


    }
}
