import React from 'react'; 
import { connect } from 'react-redux'; 
import './Welcome.css'; 

export class Welcome extends React.Component {
    render() {
        return ( 
            <div className="welcome"> 
                
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Welcome); 

