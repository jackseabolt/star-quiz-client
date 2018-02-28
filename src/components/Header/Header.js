import React from 'react'; 
import './Header.css'; 
import ShareButton from 'react-social-share-buttons'

export default class Header extends React.Component {
    render() {
        return ( 
            <div className="header"> 
                <h1 className="header-title">StarQuiz</h1>
                <div className="header-social-link-container">
                    <div className="header-social-container">
                        <ShareButton
                        compact
                        socialMedia={'facebook'}
                        url={"https://starquiz.netlify.com/"}
                        media={"http://res.cloudinary.com/dkksqcvlg/image/upload/v1519776729/starquiz_s1p9xo.png"}
                        text="An application for testing your knowledge of the Solar System!"
                        />
                    </div>
                    <div className="header-social-container">
                        <ShareButton
                        compact
                        socialMedia={'twitter'}
                        url={"https://starquiz.netlify.com/"}
                        media={"http://res.cloudinary.com/dkksqcvlg/image/upload/v1519776729/starquiz_s1p9xo.png"}
                        text="An application for testing your knowledge of the Solar System!"
                        />
                    </div>
                    <div className="header-social-container">
                        <ShareButton
                        compact
                        socialMedia={'google-plus'}
                        url={"https://starquiz.netlify.com/"}
                        media={"http://res.cloudinary.com/dkksqcvlg/image/upload/v1519776729/starquiz_s1p9xo.png"}
                        text="An application for testing your knowledge of the Solar System!"
                        />
                    </div>
                </div>    
            </div>
        )
    }
}

