import React from 'react'; 
import { connect } from 'react-redux'; 

export class Header extends React.Component {
    render() {
        return ( 
            <div> 
                Header
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Header); 

