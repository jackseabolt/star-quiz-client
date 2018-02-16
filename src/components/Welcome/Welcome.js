import React from 'react'; 
import { connect } from 'react-redux'; 
import './Welcome.css'; 

export class Welcome extends React.Component {
    render() {
        return ( 
            <div className="welcome"> 
                <div class="video-background">
                    <div class="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

}); 

export default connect(mapStateToProps)(Welcome); 

