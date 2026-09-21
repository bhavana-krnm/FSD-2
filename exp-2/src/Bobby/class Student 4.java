class Student
 {
    String name;
    int age;

    // Method to display student details
    void displayDetails() {
        System.out.println("student name: " + name);
        System.out.println("Student Age: " + age);
    }

    public static void main(String[] args) {
        //create object
        Student s1 = new Student();

        // Assign values
        s1.name = "Bobby";
        s1.age = 19;

        // call the method to display details
        s1.displayDetails();
    }
}