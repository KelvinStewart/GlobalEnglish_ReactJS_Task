import React from 'react';
import ReactDOM from 'react-dom';
import DisplayList from './DisplayList';
import './../index.css';
// import './App.css';

class OtherForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        topics: [],
        heading: '',
        subtopic: [{ text: '' }],
       
      };
    }
    
    handleHeadingChange = (evt) => {
      this.setState({ heading: evt.target.value });
    }
    
    handleSubtopicChange = (idx) => (evt) => {
      const newSubtopic = this.state.subtopic.map((subtopic, sidx) => {
        if (idx !== sidx) return subtopic;
        return { ...subtopic, text: evt.target.value };
      });
      
      this.setState({ subtopic: newSubtopic });
    }
    
    handleSubmit = (evt) => {
        if (!this.state.heading.length) {
            return;
          }
      evt.preventDefault();
      const newItem = { 
        heading:this.state.heading,
        subtopic: this.state.subtopic,
        id:Date.now(),
        };
       this.setState(prevState => ({
        topics: prevState.topics.concat(newItem),
        heading: '',
        subtopic:[{text:''}],
      }));
    
     }
    
    handleAddSubtopic = () => {
      this.setState({ subtopic: this.state.subtopic.concat([{ text: '' }]) });
    }
    
    handleRemoveSubtopic = (idx) => () => {
      this.setState({ subtopic: this.state.subtopic.filter((s, sidx) => idx !== sidx) });
    }
    
    render() {    
      ReactDOM.render(<DisplayList state={this.state} /> , document.getElementById("OtherTemplate"));
      return (
        <div class="row">
           <div class="col-sm-4">
              <h4 className="alert alert-info">Other!</h4>
           </div>
           <div class="col-sm-8">
              <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" value={this.state.heading} onChange={this.handleHeadingChange}/>
              
                <h4>Sub Topic</h4>
              
                {this.state.subtopic.map((subtopic, idx) => (
                  <div className="">
                    <input type="text" className="form-control" value={subtopic.text} onChange={this.handleSubtopicChange(idx)}
                    />
                    <button type="button" className="btn btn-primary"  onClick={this.handleRemoveSubtopic(idx)}><button type="button" className="btn btn-primary"  onClick={this.handleRemoveSubtopic(idx)}><span class="glyphicon glyphicon-remove"></span></button></button>
                  </div>
                ))}
                <button type="button"  className="btn btn-primary" onClick={this.handleAddSubtopic}>Add subtopic</button>
                <div className ="modal-footer">
                <button className="btn btn-primary">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
              </form>
           </div>
        </div>
      )
    }
}


export default OtherForm;
