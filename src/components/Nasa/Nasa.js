import React from 'react'; 
import { connect } from 'react-redux'; 
import './Nasa.css'; 

export class Nasa extends React.Component {
    render() {
        return ( 
            <div className="nasa"> 
                
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Nasa); 
