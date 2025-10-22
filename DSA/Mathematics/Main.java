class Bicycle {
    public void sound(){
        System.out.println("No sound");
    }
}
class bike extends Bicycle{
    @Override
    public void sound(){
        System.out.println("sound");;
    }
}

public class Main {
    public static void main(String[] args) {
        Bicycle obj = new bike();

        obj.sound();
    }
}
