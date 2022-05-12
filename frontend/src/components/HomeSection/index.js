import React ,{useState}from 'react'
import Video from '../../videos/video.mp4'
import { HomeContainer, HomeBG,VideoBG, HomeContent,HomeH1,HomeP,HomeBtnWrapper,ArrowForward,Arrowright} from './HomeEle'
import { Button } from '../ButtonEle'
const HomeSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HomeContainer >
        <HomeBG>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>       
            
        </HomeBG>
        <HomeContent>
            <HomeH1>Welcome to our road tracking website </HomeH1>
            <HomeP>
                Sign up to our app.
            </HomeP>
            <HomeBtnWrapper>
                <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                    Get started {hover ? <ArrowForward/> : <Arrowright/>}
                </Button>
            </HomeBtnWrapper>
        </HomeContent>
    </HomeContainer>
  )
}

export default HomeSection