import  java.util.ArrayList;
import java.util.Scanner;

public class students {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Student> al = new ArrayList<>();
        int a=2;
        while (a>0) { 
            al.add(new Student(sc.nextInt(), sc.next()));
            a--;
        } 
        for(int i=0;i<al.size();i++) {
            if(al.get(i).name.equals("sai")){
                System.out.println("found");
            }
        }
        
    }
}
class Student{
    int roll;
    String name;
    
    public Student(int roll , String name) {
        this.roll=roll;
        this.name=name;
        
    }

    
}
