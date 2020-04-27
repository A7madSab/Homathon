import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { addMesh, deleteMesh, scaleDownMesh, scaleUpMesh, selectMesh } from "../redux/actions"
import { connect } from "react-redux"

const Mesh = ({ addMesh, meshes, deleteMesh, scaleDownMesh, scaleUpMesh, selectMesh }) => {
    return (
        <Grid container justify="center" style={{ display: "flex", flex: 1, marginBottom: 15, height: "100vh", justifyContent: "center" }}>
            <Typography>Mesh</Typography>
            <Button onClick={() => addMesh("Box-Geometry")}>Add mesh</Button>
            {
                meshes.meshes?.map(mesh => {
                    return (
                        <Grid style={{ backgroundColor: "grey", margin: 15 }} key={mesh.id}>
                            <Typography>{mesh.type}</Typography>
                            <Grid container direction="row">
                                <Button style={{ backgroundColor: "green" }} onClick={() => scaleUpMesh(mesh.id)}>Scale Up</Button>
                                <Button style={{ backgroundColor: "green" }} onClick={() => scaleDownMesh(mesh.id)}>Scale Down</Button>
                            </Grid>

                            <Typography>Position:</Typography>
                            <Grid container direction="row">
                                <Typography style={{ padding: 5 }}>x:{Number(mesh.position[0]).toFixed(2)}</Typography>
                                <Typography style={{ padding: 5 }}>y:{Number(mesh.position[1]).toFixed(2)}</Typography>
                                <Typography style={{ padding: 5 }}>z:{Number(mesh.position[2]).toFixed(2)}</Typography>
                            </Grid>
                            <Button style={{ backgroundColor: "red" }} onClick={() => deleteMesh(mesh.id)} >Delete</Button>
                            <Button style={{ backgroundColor: "blue" }} onClick={() => selectMesh(mesh.id)} >SELECT</Button>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    meshes: state.meshReducer
})
const mapDispatchToProps = dispatch => ({
    addMesh: type => dispatch(addMesh(type)),
    deleteMesh: id => dispatch(deleteMesh(id)),
    scaleDownMesh: id => dispatch(scaleDownMesh(id)),
    scaleUpMesh: id => dispatch(scaleUpMesh(id)),
    selectMesh: id => dispatch(selectMesh(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Mesh)