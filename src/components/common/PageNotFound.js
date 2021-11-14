import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import './PageNotFound.css';
import { ROUTES } from "../../utility/constant";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';


function PageNotFound({ history }) {
  return (
    <Grid>
      <Grid container className='container'>
        <Grid item xl={12} className='item'>
          <Typography>404 - PAGE NOT FOUND</Typography>
        </Grid>
        <Grid item xl={12} className='item'>
          <Button variant="contained" color="primary" onClick={() => history.push({ pathname: ROUTES.home })}>
            GO TO HOMEPAGE
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

PageNotFound.propTypes = {
    history: PropTypes.object.isRequired,
}

export default withRouter(PageNotFound);
