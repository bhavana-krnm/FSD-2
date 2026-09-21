import StudentCard from "./StudentCard";

function ShowStudentData() {
  const studentName = "Bhanaa";
  const studentAge = 25;
  const studentCourse = "React JS";
  const studentCity = "Palamaner";
  const studentIsEnrolled = true;

  const studentName1 = "Cherry";
  const studentAge1 = 20;
  const studentCourse1 = "Fullstack JS";
  const studentCity1 = "Bangalore";
  const studentIsEnrolled1 = false;

  return (
    <div>
      <h1>React Props Demo</h1>

      <StudentCard
        name={studentName}
        age={studentAge}
        course={studentCourse}
        city={studentCity}
        isEnrolled={studentIsEnrolled}
      />

      <StudentCard
        name={studentName1}
        age={studentAge1}
        course={studentCourse1}
        city={studentCity1}
        isEnrolled={studentIsEnrolled1}
      />
    </div>
  );
}

export default ShowStudentData;