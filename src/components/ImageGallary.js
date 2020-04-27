import React from "react"
import Grid from "@material-ui/core/Grid"

import { addSkybox, selectSkybox, deleteSkybox } from "../redux/actions"
import { connect } from "react-redux"

const ImageGallary = ({ scene, addSkybox, selectSkybox, deleteSkybox }) => {
    const handleFileUpload = (e) => {
        const { files } = e.target
        const keys = Object.keys(files)

        keys.forEach(index => {
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                addSkybox(reader.result)
            }, false)
            reader.readAsDataURL(files[index])
        })
    }

    return (
        <Grid>
            <input multiple="multiple" onDrop={handleFileUpload} type="file" onChange={handleFileUpload} />
            <Grid container direction="row" justify="space-around">
                {scene.skybox.gallary.map((img, key) => <img onDoubleClick={() => deleteSkybox(img)} onClick={() => selectSkybox(img)} style={{ padding: 5 }} key={key} width={"45%"} alt="skybox" src={img} />)}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    scene: state.sceneReducer
})
const mapDispatchToProps = dispatch => ({
    addSkybox: image => dispatch(addSkybox(image)),
    selectSkybox: image => dispatch(selectSkybox(image)),
    deleteSkybox: image => dispatch(deleteSkybox(image)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ImageGallary)