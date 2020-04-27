import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
// import { updateScene } from "../api/index"
import { deleteMesh, addMesh, selectMesh } from "../redux/actions"
import { connect } from "react-redux"
// import { Link } from "react-router-dom";

const Text = ({ addText, deleteText, textReducer, selectText, selectedTextGeometry, textGeometries }) => {
    const [inputText, setInputText] = useState("")
    const handleOnAddText = () => {
        addText(inputText)
        setInputText("")
    }
    return (
        <Grid justify="center" align="center">
            <Input placeholder="text" value={inputText} onChange={e => setInputText(e.target.value)} />
            <Button onClick={handleOnAddText}> ADD Text</Button>

            {
                textGeometries.map((textGeometry, key) => {

                    return (
                        <Grid key={key} container direction="row">
                            <Button onClick={() => selectText(textGeometry.id)}>
                                <Typography style={{ backgroundColor: textGeometry?.id === selectedTextGeometry?.id ? "Red" : "blue" }}>{textGeometry.text}</Typography>
                            </Button>
                            <Button onClick={() => deleteText(textGeometry.id)}> Delete</Button>

                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    textReducer: state.meshReducer,
    selectedTextGeometry: state.meshReducer.selectedMesh?.type === "Text" ? state.meshReducer.selectedMesh : null,
    textGeometries: state.meshReducer.meshes?.filter(mesh => mesh?.type === "Text")
})
const mapDispatchToProps = dispatch => ({
    addText: newText => dispatch(addMesh("Text", { text: newText })),
    deleteText: textId => dispatch(deleteMesh(textId)),
    selectText: textid => dispatch(selectMesh(textid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Text)