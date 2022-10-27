import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <IconMenu>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </IconMenu>
        <Logo />
        <SubscribeButton>
          <Button>SUBSCRIBE</Button>
          <SubSubscribe href="/">Already a subscriber?</SubSubscribe>
        </SubscribeButton>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const IconMenu = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    justify-self: start;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media (${QUERIES.laptopAndUp}) {
    align-self: flex-start;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscribeButton = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    align-self: end;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const SubSubscribe = styled.a`
  font-size: 0.825rem;
  color: ${COLORS.gray[900]};
  text-decoration: underline;
  font-style: italic;
  padding-top: 4px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 32px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: end;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
