import React, {Component} from 'react';
import sentiment from 'sentiment'
import PieChart from './Graphs/PieChart'
import Footer from './Footer';
import { TagCloud } from "react-tagcloud";
import { customRenderer } from '../utils'
let emotionWord, emotionInstances, array= [], emotion = require('../emotion')


class MovieInput extends Component {

  constructor(props) {
    super(props)
    this.state = { alertShow:false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.analyzeMovieScript(e)
  }  

  render(){
    let {submitting, sentimentObject, emotionObject, emotionCount, movieArray} = this.props
    return (
      <div className='container'>
        
        <div className="row ">
          <h1 id='songHeading'>Analyze Movie Scripts</h1>
        </div>

        <div className="row row-centered">
          <form className='movieForm' onSubmit={this.handleClick}>
            <select name="movieScript" id='movieSelect'>
              {
              movieArray.map((movie,i)=>(
              <option key={i}value={movie.link}>{movie.title}</option>

              ))
              }
            </select>
            <button type="submit" id='movieSubmit' className="btn btn-success" onClick={e=>this.setState({alertShow:false})}>Analyze Movie Script</button>
          </form>
        </div>

        <div className="row row-centered">
          <div id='pieBox1' className="col-xs-12 col-md-6 col-centered">
            <PieChart sentimentObject={sentimentObject} emotionObject={emotionObject}/>
          </div>  
          <div id='pieBox1' className="col-xs-12 col-md-6 col-centered">
            <PieChart sentimentObject={sentimentObject} emotionObject={emotionObject}/>
          </div> 
          <div className="row">
            <TagCloud 
              minSize={1}
              maxSize={2}
              tags={emotionCount.concat([])}
              renderer={customRenderer}
              shuffle={false}
              onClick={
                tag => {
                  emotionWord=tag.value
                  emotionInstances=tag.count 
                  array = (emotion[tag.value])
                  this.setState({alertShow:true})
                }
              }          
            />
          </div>
        </div>

        <div className='row'>
          {
            this.state.alertShow&&(
              <div className="alert alert-info" onClick={e=>{this.setState({alertShow:false})}}>
                <a className="close" aria-label="close">&times;</a>
                <h4 id='emotText'>{emotionWord[0].toUpperCase()+emotionWord.slice(1)}</h4>
                <p>Instances: {emotionInstances} </p>
                <span>Associated Emotions: </span>
                { array.map(emotion=>(<span>{emotion + " "}</span>)) }
              </div>
            )
          }
        </div>    
        <Footer/>
      </div>
    )
  }
}

export default MovieInput;




              














