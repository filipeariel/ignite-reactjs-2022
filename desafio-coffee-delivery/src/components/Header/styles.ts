import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 0.875rem;
      color: ${(props) => props.theme["purple-500"]};
    }

    div > div {
      display: flex;
      gap: 0.25rem;

      padding: 0.5rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme["purple-200"]};
    }

    div {
      display: flex;
      align-items: center;
    }

    div > a {
      padding: 0.5rem;
      border-radius: 8px;

      color: ${(props) => props.theme["yellow-700"]};
      background-color: ${(props) => props.theme["yellow-200"]};
    }
  }
`;
