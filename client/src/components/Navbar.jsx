import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px", width: "380px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px", width: "100%" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  display: "none";
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const cartIcon = {
  "@media only screen and (max-width: 400px)": {
    height: "10px",
  },
};
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Link
            to={`/products/women`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>Women</MenuItem>
          </Link>
          <Link
            to={`/products/men`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>Men</MenuItem>
          </Link>
        </Left>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <Center>
            <Logo>NYRA</Logo>
          </Center>
        </Link>

        <Right>
          {!user && (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/register"
            >
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
          {user ? (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/"
              onClick={() => dispatch(logout())}
            >
              <MenuItem>SIGN OUT</MenuItem>
            </Link>
          ) : (
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} style={{ color: "black" }} color="primary">
                <ShoppingCartOutlined style={cartIcon} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
