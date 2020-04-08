import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  
  background-color: rgba(20, 20, 02, 0.8);
  z-index: 999;
  box-shadow: 0 1px 2px rgba(40, 50, 60, 0.06);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
  height: 50px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname }}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Korea News</SLink>
            </Item>
            <Item current={pathname === "/us"}>
                <SLink to="/us">Us News</SLink>
            </Item>
        </List>
    </Header>
));