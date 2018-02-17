import React from 'react'; 
import { connect } from 'react-redux'; 
import './Welcome.css'; 

export class Welcome extends React.Component {
    render() {
        return ( 
            <div className="welcome"> 
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe title="welcome" src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="welcome-title-container">
                <h1 className="welcome-title">"The Universe is under no obligation <br /> to make sense to you."<br /></h1>
                <h3 className="welcome-title-sub">~ Neil deGrasse Tyson</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Welcome); 

