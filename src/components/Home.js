import styled from "styled-components"
import Leftside from "./Leftside"
import Main from "./Main"
import Rightside from "./Rightside"

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5><a>Develop new skills - </a></h5>
                <p> Millions of members use LinkedIn Learning. Unlock your free access today.
                <img src="/images/ellipsis.svg" alt=""/></p>
            </Section>
            <LayOut>
                <Leftside/>
                <Main/>
                <Rightside/>
            </LayOut>
        </Container>
    )
}

export default Home;

const Container = styled.div `
    padding-top: 52px;
    max-width: 100%;
`
const Section = styled.section `
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    display: flex;
    justify-content: center;
    text-decoration: underline;

    h5 {
        color: #0a66c2;
        font-size: 14px;
    }
    a{
        font-weight: 700;
        cursor: pointer;
        &:hover {
            color: rgba(0, 0, 0, 0.6);
        }
    }
    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        img {
            width: 20px;
            height: 20px;
            margin-left: 20px;
            cursor: pointer;
            user-select: none;
        }
    }
    
    @media(max-width: 768px) {
      p{  
        flex-direction: column;
        padding: 0 5px;
      }
      img {
          display: none;
      }
    }
`

const LayOut = styled.div `
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-rows: auto; */
    margin: 25px 0;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`