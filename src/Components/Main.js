import React, {Component} from 'react'
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import Single from './Single';


class Main extends Component{
    
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Title title='Photowall'/>
                
                <Route exact path="/" render={()=>(
                    <div>
                        <Photowall {...this.props}/>
                    </div>
                    )}></Route>

                <Route path="/AddPhoto" render={({history})=>
                    (
                        <AddPhoto {...this.props}/>
                    )}/>

                <Route path="/single/:id"  render={(params)=>
                    (
                        <Single {...this.props} {...params}  />       
                    )}/>  
            </div>
        )
    }
}

export default Main;