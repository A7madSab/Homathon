import React from "react"
import { updateScene } from "../api/index"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom";
import QRCode from "qrcode.react"
import { connect } from "react-redux"

const Material = ({ shareCode }) => {
    return (
        <Grid container justify="center" align="center" direction="column">
            <Typography>Please save the scene before viewing or scanning the QRcode.</Typography>

            <Button fullWidth variant="contained" color="secondary" onClick={() => updateScene()}> Save</Button>

            <Typography>Scan Me:</Typography>

            <QRCode value={`https://homathon.herokuapp.com/viewer/${shareCode}`} />

            {/* <Typography>Share Code: {shareCode}</Typography> */}
            {/* <Link to="/"> */}
            {/* <Button fullWidth variant="contained" color="secondary">Go to DashBord</Button> */}
            {/* </Link> */}
            <Link to={`/viewer/${shareCode}`}>
                <Button fullWidth variant="contained" color="secondary">View final Scene</Button>
            </Link>
        </Grid>
    )
}

const mapStateToProps = ({ sceneReducer }) => ({
    shareCode: sceneReducer.shareCode
})
export default connect(mapStateToProps)(Material)