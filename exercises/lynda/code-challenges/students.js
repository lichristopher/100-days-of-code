function getStudents(classroom) {
  const { classList, hasTeachingAssistant } = classroom;

  if (hasTeachingAssistant) {
    const [teacher, studentAssitant, ...students] = classList;
    console.log({ teacher, studentAssitant, students });
  } else {
    const [teacher, ...students] = classList;
    console.log({ teacher, students });
  }
}
