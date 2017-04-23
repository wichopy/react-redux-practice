import React, {PropTypes,Component} from 'react';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context);

    this.state={
      course: {title: ''}
    };
    this.onClickSave=this.onClickSave.bind(this);
    this.onTitleChange=this.onTitleChange.bind(this);
  }

  onClickSave = () => {
    alert(`Saving ${this.state.course.title}`);
  };
  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course:course});
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;