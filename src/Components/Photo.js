import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class Photo extends Component{

    render(){
        let photo = this.props.photo
        return <figure className='figure'>
                    <Link to={`/single/${photo.id}`}>
                        <img className='photo' src={photo.imageLink} alt={photo.description}/>
                    </Link>
                    <div><p>{photo.description}</p></div>
                    <div className='button-container'>
                        <button className='remove-button' onClick={
                            ()=>{
                                this.props.removePost(this.props.index)
                                this.props.history.push('/')

                        }}>Remove</button>
                        <Link className="button" to={`/single/${photo.id}`}> 
                            <div className="comment-count"> 
                            <div className="speech-bubble"> </div>
                            {this.props.comments[photo.id] ? this.props.comments[photo.id].length : 0 }
                            </div>
                        </Link>
                    </div>
               </figure>;
    }
}

Photo.propTypes = {
    photo : PropTypes.object.isRequired
}

export default Photo;