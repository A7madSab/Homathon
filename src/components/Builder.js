import React from "react"

import Grid from "@material-ui/core/Grid"
import Tabs from "./Tabs"
import Scene from "./Scene.js";

const Builder = () => (
  <Grid container direction="row">
    <Grid item xs={3}>
      <Tabs />
    </Grid>
    <Grid item xs={9}>
      <Scene />
    </Grid>
  </Grid>
)

export default Builder
