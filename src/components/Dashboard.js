import React, { useState } from "react"
import { CreateProject } from "../api/index.js" //getSceneByShareCode
import { Link } from "react-router-dom";
import { addProjectId, addProjectShareCode, addSceneId } from "../redux/actions.js";
import store from "../redux/store";

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
// import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import QRCode from "qrcode.react"


const styles = makeStyles({
    container: {
        justifyContent: "space-around",
        alignItem: "center",
        alignItems: "center",
        display: "flex",
        marginBottom: 15,
        height: "100vh",
        backgroundImage: "url(/img/person-vr-glasses.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "bottom",
        backgroundColor: "blueviolet"
    },
    card: {
        height: "50vh",
        width: "25vw",
        margin: "30px",
        justifyContent: "center",
        alignItem: "center",
    }
})

const DashBoard = () => {
    const [projectInfo, setProjectInfo] = useState({ projectId: "", shareCode: "", sceneId: "" });
    // const [code, setCode] = useState("");
    const classes = styles()

    return (
        <Grid className={classes.container}>
            <Card className={classes.card}>
                <CardContent style={{ height: "100%" }}>
                    <Grid style={{ height: "100%" }} container direction="column" justify="space-around" alignItems="center">

                        <Typography variant="h4" align="center">Build a VR Room</Typography>
                        {
                            projectInfo?.projectId === "" && projectInfo?.sceneId === "" && projectInfo?.shareCode === ""
                                ? (
                                    <Grid justify="center" align="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            onClick={async () => { setProjectInfo(await CreateProject()); }}>
                                            <Typography>
                                                Create
                                        </Typography>
                                        </Button>
                                        <Typography style={{ fontSize: 12 }}>Creating a project might take a moment at first</Typography>
                                    </Grid>

                                )
                                : (
                                    <Grid container direction="column" justify="space-around" alignItems="center">
                                        <QRCode onClick={() => console.log("hello")} value={`https://homathon.herokuapp.com/viewer/${projectInfo.shareCode}`} />
                                        {/* <Typography align="center">
                                            {"Share Code : " + projectInfo.shareCode}
                                        </Typography> */}
                                        <Link to={`builder/${projectInfo.shareCode}`}>
                                            <Button variant="contained" color="primary" onClick={async () => {
                                                store.dispatch(addProjectId(projectInfo.projectId));
                                                store.dispatch(addProjectShareCode(projectInfo.shareCode));
                                                store.dispatch(addSceneId(projectInfo.sceneId));
                                            }}>
                                                Open Project New Tab
                                        </Button>
                                        </Link>
                                    </Grid>
                                )
                        }
                    </Grid>
                </CardContent>
            </Card>
            {/* <Card className={classes.card}>
                <CardContent style={{ height: "100%" }}>
                    <Grid style={{ height: "100%" }} container direction="column" justify="space-around" alignItems="center">

                        <Typography variant="h4">View Room</Typography>
                        <TextField type="text" placeholder="Share Code" value={code} onChange={e => setCode(e.target.value)} />
                        <Link to="viewer">
                            <Button variant="contained" color="primary" onClick={() => getSceneByShareCode(code)}>Fetch Scene</Button>
                        </Link>

                    </Grid>
                </CardContent>
            </Card> */}
        </Grid >
    );
}

export default DashBoard

