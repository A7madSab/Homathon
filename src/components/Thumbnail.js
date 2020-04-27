import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/styles/makeStyles"

import { connect } from "react-redux"

import { addMesh } from "../redux/actions"
import { getModelURL } from "../api"

const styles = makeStyles({
    container: {
        display: "flex",
        marginBottom: 15,
        height: "100vh",
        justifyContent: "center"
    },
    card: {
        width: "45%",
        margin: 5
    },
    cardBody: {
        maxHeight: 75,
        overflow: "hidden"
    },
})

const Poly = ({ dispatch, polys, modelReducer, addMesh }) => {
    const classes = styles()

    return (
        <Grid container className={classes.container}>
            {
                polys?.map((poly, key) => (
                    <Card onClick={() => { addMesh("Poly", getModelURL(poly)) }} key={key} className={classes.card}>
                        <CardActionArea>
                            <img alt="poly name" src={poly.thumbnail?.url} width="100%" />
                            <CardMedia
                                src={poly.thumbnail?.url}
                                image={poly.thumbnail?.url}
                                title="Contemplative Reptile"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {poly.displayName}
                                </Typography>
                                <Typography className={classes.cardBody} variant="body2" color="textSecondary" component="p">
                                    {poly.description}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    Auther: {poly.authorName}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </Grid>
    )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => ({
    addMesh: (type, mesh) => dispatch(addMesh(type, mesh))
})

export default connect(mapStateToProps, mapDispatchToProps)(Poly)