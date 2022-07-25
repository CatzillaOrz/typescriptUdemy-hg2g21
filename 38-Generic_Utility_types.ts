/*
 **  [Utility Types]:
 **
 **
 */

/*
 **  [Partial]
 **
 **
 */

interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;
  return courseGoal as CourseGoal;
}

/*
 **  [Readonly]
 **
 **
 */

const names: Readonly<string[]> = ['Max', 'Anna'];
//  names.push('Manu'); //Error
//  names.pop();  //Error
