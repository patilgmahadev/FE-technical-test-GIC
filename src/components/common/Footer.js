import React from 'react';
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <AppBar
      position="static"
      color="primary"
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
          Copyright © 2021 Testing Assignment.| All Rights Reserved
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Footer;
