
import React, {Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component{
    render(){
        let photos = this.props.posts
        return <div> 
                <Link className='addIcon' to='/AddPhoto'></Link>   
               <div className='photoGrid'>
                    {photos.map((photo, index)=><Photo key={index} photo={photo} {...this.props} index ={index}/>)} 
               </div>
            </div>
    }
}

PhotoWall.propTypes ={
    posts:PropTypes.array.isRequired
}

export default PhotoWall;
