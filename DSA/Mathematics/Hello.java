import java.util.Scanner;

class Hello{
    public static void main(String[] args) {
    
        Scanner sc =new Scanner(System.in);
        int i = sc.nextInt();
        byte b = sc.nextByte();
        short s = sc.nextShort();
        long l = sc.nextLong();
        float f = sc.nextFloat();
        double d = sc.nextDouble();
        System.out.println("int:"+i);
        System.out.println("byte:"+b);
        System.out.println("short:"+s);
        System.out.println("long:"+l);
        System.out.println("float:"+f);
        System.out.println("double:"+d);
        System.out.println("Byte min"+Byte.MIN_VALUE);
        System.out.println("Byte max"+Byte.MAX_VALUE);
        System.out.println("Integer min"+Integer.MIN_VALUE);
        System.out.println("Integer max"+Integer.MAX_VALUE);
        System.out.println("Long min"+Long.MIN_VALUE);
        System.out.println("Long max"+Long.MAX_VALUE);
        System.out.println("Float min"+Float.MIN_VALUE);
        System.out.println(Float.MAX_VALUE);
        System.out.println(Short.MIN_VALUE);
        System.out.println(Short.MAX_VALUE);
        System.out.println(Double.MIN_VALUE);
        System.out.println(Double.MAX_VALUE);

        sc.close();
        

    }
}
