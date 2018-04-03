import React from 'react';
class DisplayList extends React.Component {
    render() {
      return (
        <div>
          {this.props.state.topics.map(item => (
            <div key={item.id}>
              <h5 className="headingTemplate">{item.heading}</h5>
                <li>{
                  item.subtopic[0].text
                  
                }</li>
             
            </div>
          
          ))
        }

        </div>
      );
    }
  }

export default DisplayList;