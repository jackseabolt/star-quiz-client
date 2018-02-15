import React from 'react'; 
import { connect } from 'react-redux'; 

export class Footer extends React.Component {
    render() {
        return ( 
            <div> 
                Footer
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Footer); 

