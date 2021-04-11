import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, ButtonSizeEnum, Spacer } from "../index";
import { useUser } from "../../common/hooks/useUser";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  grid-area: Header;
  width: 100%;
  padding: 0 var(--body-margin);
  /* TODO: fixme */
  /* position: sticky; */
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgb(236, 236, 236);
`;

const Logo = styled(Link)`
  font-weight: 600;
  cursor: pointer;
`;

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  li:not(:last-child) {
    margin-right: 3em;
  }
`;

export default function Header() {
  const user = useUser();

  return (
    <HeaderContainer>
      <Logo to="/">BROCOLI</Logo>
      <nav>
        <LinksWrapper>
          <li>
            <a href="/">Produit</a>
          </li>
          <li>
            <a href="/">Prix</a>
          </li>
          <li>
            <a href="/">Développeur</a>
            {/* <ul>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Status</a>
              </li>
            </ul> */}
          </li>
        </LinksWrapper>
      </nav>

      {!user && (
        <Link to="/enter">
          <Button size={ButtonSizeEnum.auto}>Connexion</Button>
        </Link>
      )}

      {user && (
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <p>{user?.data?.email}</p>

          <Spacer axis="horizontal" size={1} />

          {/* TODO: fix me */}
          <div
            style={{
              width: "2.5em",
              height: "2.5em",
              borderRadius: "50%",
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {user?.data?.email.substr(0, 1).toUpperCase()}
          </div>
        </div>
      )}
    </HeaderContainer>
  );
}
