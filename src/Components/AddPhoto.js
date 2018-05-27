import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddPhoto extends Component{

    constructor(){
        super()
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handelSubmit(event){
        event.preventDefault()
        let link = event.target.elements.link.value
        let description = event.target.elements.description.value
        let photo = {
            id: Number(new Date()),
            description: description,
            imageLink: link
        }

        if(description && description){
            this.props.addPost(photo)
            this.props.history.push('/')
        }
    }

    render(){
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handelSubmit}>
                        <input type='text' placeholder='Link' name='link'/>
                        <input type='text' placeholder='Description' name='description'/>
                        <button>POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddPhoto.propTypes={
    onAddPhoto: PropTypes.func.isRequired
}

export default AddPhoto