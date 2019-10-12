import React from 'react';
import { Link } from 'react-router';


class IndexClass extends React.Component {
  render() {
    const { url, className, classId } = this.props;
    return (
      <div className="index-class-item">
        <Link to={`/class-detail/${classId}`}>
          <img src={url} alt="class-thumb" />
          <span>{className}</span>
        </Link>
      </div>
    );
  }
}

export default IndexClass;
