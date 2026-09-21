class Student
{
    // Attributes
    String name;
    int age;

    // Method to display student details
    void displayDetails() {
        System.out.println("Student Name: " + name);
        System.out.println("Student Age: " + age);
    }

    // Main method
    public static void main(String[] args) 
    {
        // Create an object of Student class
        Student s1 = new Student();

        // Assign values to object attributes
        s1.name = "Bobby";
        s1.age = 19;

        // Display student details using a method
        s1.displayDetails();
    }
}