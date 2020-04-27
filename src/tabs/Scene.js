import React from "react"
import Switch from '@material-ui/core/Switch'
import Slider from "@material-ui/core/Slider"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from "@material-ui/core/FormControlLabel"

import { switchOrthographic, changeCameraPosition } from "../redux/actions"
import { connect } from "react-redux"

import ImageGallary from "../components/ImageGallary"

const Scene = ({ sceneReducer, dispatch }) => {
    const { orthographic, camera } = sceneReducer

    return (
        <Grid justify="center" align="center" style={{ padding: 5 }}>
            <Typography variant="h6">Skybox</Typography>
            <ImageGallary />
            <Typography variant="h6">Position</Typography>
            <Grid container direction="row">
                <Grid item>
                    <Typography>
                        X:
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Slider
                        onChange={(event, newValue) => dispatch(changeCameraPosition({ x: newValue }))}
                        aria-labelledby="discrete-slider-small-steps"
                        value={camera.position[0]}
                        step={1}
                        marks
                        min={-15}
                        max={+15}
                        valueLabelDisplay="auto"
                    />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item>
                    <Typography>
                        Y:
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={camera.position[1]}
                        onChange={(event, newValue) => dispatch(changeCameraPosition({ y: newValue }))}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        min={-15}
                        max={+15}
                        valueLabelDisplay="auto"
                    />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item>
                    <Typography>
                        Z:
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={camera.position[2]}
                        onChange={(event, newValue) => dispatch(changeCameraPosition({ z: newValue }))}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        min={-15}
                        max={+15}
                        valueLabelDisplay="auto"
                    />
                </Grid>
            </Grid>

            <Typography variant="h6">Type</Typography>
            <FormControlLabel
                control={<Switch checked={orthographic} onChange={() => dispatch(switchOrthographic())} color="primary" name="orthographic" />}
                label="Orthographic Camera"
            />
        </Grid>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Scene)