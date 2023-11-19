import styled from "styled-components";
function Header() {

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>

      </Menu>
      <RightMenu>
        <a href="#"><i class="fa-solid fa-question"></i></a>
        <a href="#"><i class="fa-solid fa-globe"></i></a>
        <a><i class="fa-regular fa-user"></i></a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-top: 42px;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
  }
`;
