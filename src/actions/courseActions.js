export function createCourse(course) {
  console.log('in create course');
  
  return {type:'CREATE_COURSE', course};
}