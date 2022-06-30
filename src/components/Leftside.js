import styled from "styled-components"

const Leftside = () => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo/> 
                    </a>
                    <Link>Welcome, there!</Link>
                        <a>
                            <AddPhotoText>
                                    Add a photo
                            </AddPhotoText>
                        </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                        <span>Connections</span>
                        <span>Grow your Networks</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt=""/>
                    </a>
                </Widget>
                <Invite><a>Invitation</a></Invite>
                <Premium>
                    <a>
                        <span>Access exclusive tools & insights</span>
                        <span>
                            <img src="/images/premium.svg" alt=""/>
                            Try Premium for free
                        </span>
                    </a>
                </Premium>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt=""/>
                        My Items
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt=""/>
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

export default Leftside

const Container = styled.div `
    grid-area: leftside;
`
const ArtCard = styled.div `
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const UserInfo = styled.div `
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`

const CardBackground = styled.div `
     background-image: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
    cursor: pointer;
    user-select: none;
`

const Photo = styled.div `
    box-shadow: none;
    background-image: url("/images/photo.svg");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-position: center;
    background-color: white;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    border-radius: 50%;
    margin-top: -38px;
    margin-right: auto;
    margin-bottom: 12px;
    margin-left: auto;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), inset 0 0 0 rgb(0 0 0 / 20%);
    cursor: pointer;
    user-select: none;
`

const Link = styled.div `
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0 0 0 0.9);
`

const AddPhotoText = styled.div `
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    cursor: pointer;
`

const Widget = styled.div `
    border-bottom: 1px solid rgba(0 0 0 0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        flex-wrap: nowrap;
        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }

    div {
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-wrap: nowrap;
        span {
            font-size: 12px;
            line-height: 1.333;
            font-weight: bold;
            &:first-child {
                color: rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
            &:nth-child(2) {
                color: rgba(0, 0, 0, 1);
                cursor: pointer;
            }
        }
    }
}
    img {
        color: rgba(0, 0, 0, 1);
        cursor: pointer;
        user-select: none;
    }

`
const Invite = styled.a `

    border-color: rgba(0 0 0 0.8);
    text-align: center;
    padding: 12px;
    display: block;
    font-size: 12px;
    a {
        display: flex;
        align-items: center;
        color: rgba(0 0 0 1);
        font-weight: bold;
        &:first-child {
                color: rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const Item = styled.a `
    border-color: rgba(0 0 0 0.8);
    text-align: center;
    padding: 12px;
    display: block;
    font-size: 12px;
    span {
        display: flex;
        align-items: center;
        color: rgba(0 0 0 1);
        font-weight: bold;
        cursor: pointer;
        img {
            color: rgba(0 0 0 0.6);
            cursor: pointer;
            user-select: none;
            margin-right: 3px;
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`

const Premium = styled.a `
    border-top: 1px solid #d6cec2;
    border-bottom: 1px solid #d6cec2;
    border-color: rgba(0 0 0 0.8);
    text-align: center;
    padding: 12px;
    display: block;
    font-size: 12px;
    span {
        display: flex;
        align-items: center;
        color: rgba(0 0 0 1); 
        font-weight: bold;
        &:first-child {
                color: rgba(0, 0, 0, 0.6);
                font-weight: lighter;
                cursor: pointer;
            }
            &:nth-child(2):hover {
                color: #0a66c2;
                cursor: pointer;
            }
        img {
            color: rgba(0 0 0 0.6);
            width: 17px;
            height: 17px;
            margin-right: 3px;
            cursor: pointer;
            user-select: none;
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

`
const CommunityCard = styled(ArtCard) `
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;

    a{
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
        cursor: pointer;
            text-align: center;
        &:hover {
            color: #0a66c2;
        }
        img {
            color: rgba(0 0 0 0.6);
            cursor: pointer;
            user-select: none;
        }
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            text-align: center;
             
        }
        &:nth-child(4) {
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #d6cec2;
            text-align: center;
            align-items: center;
            justify-content: center;
            padding-top: 12px;
            padding-bottom: 12px;
            &:nth-child(4):hover {
                background-color: rgba(0, 0, 0, 0.08);
                text-decoration: none;
            }
        }
    }
`