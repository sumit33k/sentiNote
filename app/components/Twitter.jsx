import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {getTweets} from '../reducers/twitter';

const mapDispatchToProps = dispatch => {
  return {
    getTweets(screenName){
      dispatch(getTweets(screenName));
    }
  };
};

export class Twitter extends React.Component{
	constructor(props){
		super(props);
		const initialState = {
			twitterHandle: ''
		};
		this.state = initialState;
	}

	handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

	handleSubmit(event){
		event.preventDefault();
		console.log(this.props.getTweets(this.state.twitterHandle));
	}

	render(){
		return (
			<div className="flex-container">
				<Header />

				<Sidebar />

				<div className="content min-height-600">
					<h1>Welcome To SentiNote Twitter</h1>
					<form onSubmit={(event) => this.handleSubmit(event)}>
						<div className="form-group">
		          <label htmlFor="name" className="col-sm-2 control-label">Twitter Handle:</label>
		          <div className="col-sm-10">
		            <input onChange={(event) => this.handleChange(event)} value={this.state.twitterHandle} name="twitterHandle" type="text" className="form-control" />
		          </div>
		        </div>

						<div className="col-sm-offset-2 col-sm-10">
		          <button type="submit" className="btn btn-primary">submit</button>
		        </div>
					</form>
				</div>

				<Footer />
		  </div>
		);
	}
}
export default connect(null, mapDispatchToProps)(Twitter);
