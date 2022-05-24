import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {
    HomeContainer,
    HomeBG,
    VideoBG,
    HomeContent,
    HomeH1,
    HomeP,
    HomeBtnWrapper,
    ArrowForward,
    Arrowright
} from './HomeEle'
import {Button} from '../ButtonEle'
import {UserContext} from "../../userContext";

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HomeContainer>
            <HomeBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>

            </HomeBG>
            <HomeContent>
                <HomeH1>Welcome to our road tracking website </HomeH1>
                <HomeP>
                    Sign up to our app.
                </HomeP>

                <HomeBtnWrapper>
                    <UserContext.Consumer>
                        {context => (
                            context.user ?
                                <>
                                    <Button to="/map" onMouseEnter={onHover} onMouseLeave={onHover} primary="true"
                                            dark="true">
                                        Start tracking {hover ? <ArrowForward/> : <Arrowright/>}
                                    </Button>
                                </>
                                :
                                <>
                                    <Button to="/sign-up" onMouseEnter={onHover} onMouseLeave={onHover} primary="true"
                                            dark="true">
                                        Get started {hover ? <ArrowForward/> : <Arrowright/>}
                                    </Button>
                                </>
                        )}
                    </UserContext.Consumer>

                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection