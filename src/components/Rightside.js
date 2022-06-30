import styled from "styled-components";

const Rightside = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your Feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>
                <a>Hamza Zaidi</a>
              </span>
              <span>Senior IT Manager</span>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>
                <a>Hamza Zaidi</a>
              </span>
              <span>Website Developer</span>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>
                <a>Hamza Zaidi</a>
              </span>
              <span>Graphic Designer</span>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <CoursesCard>
        <Title>
          <h2>Today’s top courses</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <li>
          <a>
            <div>
              <span>1. Learn React Native Today</span>
              <span>Jon Doe</span>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <span>2. Improve Your Python</span>
              <span>Jon Doe</span>
            </div>
          </a>
        </li>
        <li>
          <a>
            <div>
              <span>3. Building a GraphQl Project...</span>
              <span>Jon Doe</span>
            </div>
          </a>
        </li>
        <Recommendation>
          Show more on LinkedIn Learning
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </CoursesCard>
    </Container>
  );
};

export default Rightside;

const Container = styled.div`
  grid-area: rightside;
  margin-bottom: 20px;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%auto;
  color: rgba(0, 0, 0, 1);
  img {
    cursor: pointer;
    user-select: none;
  }
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      transition-duration: 167ms;
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      background-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      user-select: none;
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
      margin-top: 10px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
      }
      img {
        margin-right: 2px;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    span {
      display: flex;
      text-align: center;

      &:first-child {
        margin-top: 10px;
        font-weight: 600;
        font-size: 16px;
      }
      &:nth-child(2) {
        margin-top: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), inset 0 0 0 rgb(0 0 0 / 20%);
  margin-bottom: 40px;
`;
const CoursesCard = styled(FollowCard)`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    list-style-type: none;
    span {
      display: flex;
      flex-direction: column;
      &:first-child {
        margin-top: 10px;
        font-weight: 600;
        font-size: 16px;
      }
      &:nth-child(2) {
        margin-top: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        text-align: left;
        margin-left: 20px;
      }
    }
  }
`;

const Recommendation = styled.a`
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
  width: 300px;
  padding: 8px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  img {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 3px;
    user-select: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
`;
