import React from 'react';
import './App.scss';


class FiveForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
          
    this.setState({
      res: getFormData(data),
    });
    document.getElementById("form-group").reset();
    
  }

  render() {
    return (
    	<div>
        <form id="form-group" className="form-group"onSubmit={this.handleSubmit}>
         <div>
         <div className="product">
            <h4>Product Name</h4>
            <input  className="form-control" id="productName" name="productName" placeholder="Product Name" type="text" />
         </div>
          <div>
            <div><h4 className="alert alert-success">What Went Well!</h4>
               <ul>
                 <li>
                   <input  className="form-control" id="wellHeading" name="wellHeading" placeholder="Heading" type="text" />
                 </li> 
                 <li>
                 <input  className="form-control" id="wellSubTopic" name="wellSubTopic" placeholder="SubTopic" type="text" />
                   </li> 
                </ul>
            </div>
          </div>
          <div >
            <div><h4 className="alert alert-warning">What Didn't Go Well!</h4>
             <ul>  
               <li>
                 <input className="form-control" id="notwellHeading" name="notwellHeading" placeholder="Heading" type="text" />
              </li>
               <li>
                 <input  className="form-control" id="notwellSupTopic" name="notwellSupTopic" placeholder="SubTopic"type="text" />
              </li>
            </ul>
            </div>
          </div>
          <div>
            <div><h4 className="alert alert-danger">Need Attention!</h4>
               <ul>
                 <li>
                 <input  className="form-control" id="attentionHeading" name="attentionHeading" placeholder="Heading" type="text" />
                </li>
                <li><input  className="form-control" id="attentionSubTopic" name="attentionSubTopic"placeholder="SubTopic" type="text" /></li>               
                </ul>
            </div>
            <div><h4 className="alert alert-info">Other!</h4>
               <ul>
                 <li><input  className="form-control" id="otherSubTopic" name="otherSubTopic"placeholder="SubTopic" type="text" /></li>               
                </ul>
            </div>
          </div>
              <div className="btnContainer"><button className="btn btn-primary">Submit</button></div>  
         </div>
        </form>
        {this.state.res && (
               <div className="res-block col-lg-9 col-md-9 col-sm-3">
                  <h4>{this.state.res['productName']}</h4>
                   <div className="wentWell">
                     <h4 className="alert alert-success">What Went Well!</h4>
                       <ul className="ulHeading">{this.state.res['wellHeading']}
                           <li>{this.state.res['wellSubTopic']}</li>               
                       </ul>
                   </div>
                 <div className="notWentWell">
                     <h4 className="alert alert-warning">What Didn't Went Well!</h4>
                       <ul>{this.state.res['notwellHeading']}
                           <li>{this.state.res['notwellSupTopic']}</li>               
                       </ul>
                    
                 </div>
                 <div className="attention">
                     <h4 className="alert alert-danger">Attention!</h4>
                       <ul>{this.state.res['attentionHeading']}
                           <li>{this.state.res['attentionSubTopic']}</li>               
                       </ul>
                  </div>
                  <div className="other">
               <h4 className="alert alert-info">Other!</h4>
                 <ul>
                    <li>{this.state.res['otherSubTopic']}</li>               
                 </ul>
              
           </div>
               </div>
               )}
    	</div>
    );
  }
}

function getFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
   	data[key] = fd.get(key);
   }
 return data;
}
export default FiveForm;
