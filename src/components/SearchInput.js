import React from "react";
import './SearchInput.css';

class SearchInput extends React.Component{
constructor(props){
    super(props)
    this.state={entry:''}
} 
onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry)
    this.props.onVideoSearchSubmit(this.state.entry)
}

 render(){

        return(
            <div>
            <div className="SearchInput">
                <form action="" onSubmit={this.onFormSubmit}>
                <div className="control has-icons-left has-icons-right search-box">
                    <div>
                    <input className="input search-input is-success" type="text" placeholder="Search" 
                        onChange={(event)=>this.setState({entry:event.target.value})} value={this.state.entry} /> 
                        <span className="icon is-small is-left">
                            <i className="fas fa-image"></i>
                        </span>
                        <span className='icon is-small is-right'>
                            <a type="Submit"><i className="fas fa-search"></i></a>
                        </span>
                    </div>    
                </div>
                </form>
            </div>
               
               
               
            
            </div>
           
        )
    }

    
}
export default SearchInput;