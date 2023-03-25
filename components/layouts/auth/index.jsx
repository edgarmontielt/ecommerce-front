import React from "react";
import styled from "styled-components";
import BREAKPOINTS_DEVICES from "../../../theme/global/breakpoints";
import NavbarAuth from "../../auth/navigation";

export const AuthCont = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/bg/background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function AuthLayout({ children }) {
  return (
    <React.Fragment>
      <NavbarAuth />
      <AuthCont>{children}</AuthCont>
    </React.Fragment>
  );
}
