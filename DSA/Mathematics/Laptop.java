public class Laptop {
    String brand;
    String RAM;
    String processor;

    public void values(String brand,String RAM , String processor){
        this.brand=brand;
        this.RAM=RAM;
        this.processor=processor;

    }
    public void display(){
        System.out.println("Laptop Brand:"+brand);
        System.out.println("RAM:"+RAM);
        System.out.println("Processor:"+processor);
    }
    public static void main(String[] args) {
        Laptop specs = new Laptop();
        specs.values("HP","16GB","Intel i7");;
        specs.display();
    }
}
