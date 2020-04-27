import React, { useEffect, useState } from "react"
import { getSearchResult } from "../api/index.js"
import makeStyles from "@material-ui/styles/makeStyles"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import Thumbnails from "../components/Thumbnail"

const styles = makeStyles({
    container: {
        padding: 5,
    },
    input: {
        marginBottom: 15
    },
    bottom: {
        width: "500px",
        height: "500px",
        position: "absolute",
        top: "80vh",
        backgroundColor: "red"
    }
})

const Poly = () => {
    const [searchResults, setSearchResults] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const classes = styles()

    useEffect(() => {
        (async () => setSearchResults(await getSearchResult(searchInput)))()
    }, [searchInput])

    return (
        <Grid container justify="center" className={classes.container}>
            <Input className={classes.input} placeholder="Car" fullWidth value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            <Thumbnails polys={searchResults} />
        </Grid>
    )
}

export default Poly