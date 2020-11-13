import React from 'react'

class SearchBar extends React.Component {
    state={term:''}

    // onInputChange(event){console.log(event.target.value)}

    // onFormSubmit(event){
    onFormSubmit=(event)=>{//to bind this to Searchbar or use (e)=>this.onFormSubmit(e) in <form> tag
        event.preventDefault();
       this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={(event)=>console.log(event.target.value)}/> OR*/}  {/*UNCONTROLLED ELEMENT */}
                        {/* <input type="text" onChange={this.onInputChange}/>  OR*/}      {/*UNCONTROLLED ELEMENT */}
                        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value.toUpperCase()})}/>  {/*CONTROLLED ELEMENT. use e.target.value.toUpperCase() to enforce uppercase*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
