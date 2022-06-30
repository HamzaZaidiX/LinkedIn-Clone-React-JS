import styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>
                  Me
                  <img className="down" src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut>
                <a href="/">Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img className="down" src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 50px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  margin-bottom: 5px;
  margin-left: 50px;
  font-size: 0px;
  user-select: none;
  cursor: pointer;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  margin-bottom: 5px;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-weight: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      outline: none;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 78px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: bold;

    &:hover,
    &:active {
      color: #0a66c2;
    }
  }
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    border-radius: 50%;
    height: 24px;
    flex-wrap: nowrap;
  }

  span {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;
`;