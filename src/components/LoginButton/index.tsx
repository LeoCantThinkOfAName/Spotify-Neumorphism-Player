import React, { useContext, useEffect } from "react";
import styled from "styled-components";

// contexts
import { ContextType, GlobalContext } from "../../contexts/GlobalContext";

// utilities
import getHashes from "../../utils/getHashes";

// assets
import logo from "../../images/spotify-logo.svg";

declare var process: {
  env: {
    REACT_APP_AUTH_ENDPOINT: string;
    REACT_APP_CLIENT_ID: string;
    REACT_APP_REDIRECT_URI: string;
    REACT_APP_SCOPES: string;
  };
};

const {
  REACT_APP_AUTH_ENDPOINT,
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_SCOPES
} = process.env;

const StyledLink = styled.a`
  align-items: center;
  background: #1db954;
  border-radius: 50px;
  color: #191414;
  display: flex;
  font-weight: 600;
  left: 50%;
  padding: 10px;
  position: absolute;
  top: 50%;
  text-decoration: none;
  transform: translate(-50%, -50%);

  p {
    margin: 0;
    margin-left: 5px;
  }
`;

const LoginButton = () => {
  const { setToken } = useContext<ContextType>(GlobalContext);

  useEffect(() => {
    const hashes = getHashes();
    setToken(hashes.access_token);
  }, []);

  return (
    <StyledLink
      href={`${REACT_APP_AUTH_ENDPOINT}client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${REACT_APP_SCOPES.replace(
        ",",
        "%20"
      )}&response_type=token&show_dialoag=true`}
    >
      <img src={logo} alt="Spotify" />
      <p>Login</p>
    </StyledLink>
  );
};

export default LoginButton;
