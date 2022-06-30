import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Microsoft Windows</span>
              <span>Computer Software . 19,912 followers</span>
              <span>4d . Edited</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipsis.svg" width="25px" height="25px" alt="" />
          </button>
        </SharedActor>
        <Description>
          Windows 11 will be Coming soon!!! 👍😍
          <span>#Windows11 #Coming_Soon!</span>
        </Description>
        <SharedImg>
          <a>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/945/179/586/windows-11-simple-microsoft-hd-wallpaper-preview.jpg"
              alt="Windows 11"
              contextMenu="false"
            />
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <button>
              <img src="/images/like-icon.svg" alt="" />
            </button>
            <button>
              <img src="/images/heart-icon.svg" alt="" />
            </button>
            <button>
              <img src="/images/clap-icon.svg" alt="" />
              <span>750</span>
            </button>
          </li>
          <li>
            <a>45 comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/like.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share.svg" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send.svg" alt="" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  position: relative;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
        cursor: pointer;
        user-select: none;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
        cursor: text;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      padding-right: 5px;

      button {
        img {
          margin: 0 7px -2px;
          user-select: none;
          cursor: pointer;
        }
        span {
          color: rgba(0, 0, 0, 0.6);
          cursor: pointer;
          user-select: none;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
          border-radius: 5px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), inset 0 0 0 rgb(0 0 0 / 20%);
      cursor: pointer;
      user-select: none;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-weight: 700;
          font-size: 14px;
        }
        &:nth-child(2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(3) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    margin-top: 8px;
    margin-right: 8px;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
  span {
    display: flex;
    flex-direction: column;
    color: #0a66cb;
    font-weight: 600;
    margin-top: 5px;
    cursor: pointer;
  }
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    font-size: 12px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    &:nth-child(2):hover {
      text-decoration: underline;
      color: #0a66cb;
    }
    button {
      display: inline-flex;
      align-items: center;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      user-select: none;
    }
    span {
      font-size: 12px;
      margin-left: 5px;
      &:hover {
        text-decoration: underline;
        color: #0a66cb;
      }
    }
  }
`;
const SocialActions = styled.div`
  line-height: 1.5;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 4px 8px;
  min-height: 40px;
  list-style: none;
  button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding: 8px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    &:nth-child(1) {
      padding-left: 20px;
      padding-right: 20px;
    }
    &:nth-child(2) {
      padding-left: 10px;
      padding-right: 10px;
    }
    &:nth-child(3) {
      padding-left: 20px;
      padding-right: 20px;
    }
    &:nth-child(4) {
      padding-left: 20px;
      padding-right: 20px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 5px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
