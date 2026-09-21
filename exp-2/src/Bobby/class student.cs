class student
{
    //attributes
    string name;
    int age;
    //Main method
    public static void main(string[] args)
    {
        //create a student object
        student s1 = new student();
        //assign values
        s1.name = "bobby";
        s1.age = 19;
        //display values
        system.out.printIn("student Name :" + s1.name);
        system.out.printIn("student age :" + s1.age);
    }
}