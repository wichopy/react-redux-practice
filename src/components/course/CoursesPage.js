import React, {PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
class CoursesPage extends Component {
  constructor(props, context){
    super(props, context);
  }
  
  courseRow (course, index) {
    console.log('render course row')
    return <div key={index}>{course.title}</div>;
  }

  render() {
    
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map((course,index)=> { return this.courseRow(course,index)})}
      </div>
    );
  }
}
//validations:
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);