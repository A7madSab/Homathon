// {/* Camera */} 
export const SWITCH_ORTHOGRAPHIC = "SWITCH_ORTHOGRAPHIC"
export const CHANGE_CAMERA_POSITION = "CHANGE_CAMERA_POSITION"
export const ADD_SKYBOX = "ADD_SKYBOX"
export const SELECT_SKYBOX = "SELECT_SKYBOX"
export const DELETE_SKYBOX = "DELETE_SKYBOX"

export function loadScene(sceneState) {
    return {
        type: "LOAD-SCENE",
        payload: sceneState
    };
}
export function loadMesh(meshState) {
    return {
        type: "LOAD-MESH",
        payload: meshState
    };
}

export function addProjectId(projectId) {
    return {
        type: "ADD-PROJECT-ID",
        payload: projectId
    };
}
export function addSceneId(sceneId) {
    return {
        type: "ADD-SCENE-ID",
        payload: sceneId
    };
}
export function addProjectShareCode(shareCode) {
    return {
        type: "ADD-PROJECT-SHARECODE",
        payload: shareCode
    };
}





export const switchOrthographic = () => ({
    type: SWITCH_ORTHOGRAPHIC
})
export const changeCameraPosition = (position) => ({
    type: CHANGE_CAMERA_POSITION,
    position
})
export const addSkybox = (image) => ({
    type: ADD_SKYBOX,
    image
})
export const selectSkybox = (image) => ({
    type: SELECT_SKYBOX,
    image
})
export const deleteSkybox = (image) => ({
    type: DELETE_SKYBOX,
    image
})

// {/* MEsh */} 
export const defaultBoxGeometryProps = {
    id: "",
    type: "Box-Geometry",
    visible: true,
    position: [0, 0, 0],
    dimensions: [2, 2, 2],
    material: "Normal",
    scale: 1,
    color: 0xff3300,
    castShadow: false,
    receiveShadow: false,
}
export const defaultPoly = {
    id: "",
    type: "Poly",
    scale: 1,
    visible: true,
    position: [0, 0, 0],
}
export const defaultText = {
    id: "",
    type: "Text",
    scale: 1,
    visible: true,
    size: 40,
    height: 5,
    position: [0, 0, 0],
}
export const ADD_MESH = "ADD_MESH"
export const DELETE_MESH = "DELETE_MESH"
export const UPDATE_MESH = "UPDATE_MESH"
export const SELECT_OBJECT = "SELECT_OBJECT"
export const SCALE_UP_MESH = "SCALE_UP_MESH"
export const SCALE_DOWN_MESH = "SCALE_DOWN_MESH"

export const addMesh = (type, payload) => {
    if (type === "Box-Geometry")
        return {
            type: ADD_MESH,
            payload: { type: "mesh", ...defaultBoxGeometryProps }
        }
    else if (type === "Poly")
        return {
            type: ADD_MESH,
            payload: { type: "poly", ...defaultPoly, ...payload }
        }
    else if (type === "Text")
        return {
            type: ADD_MESH,
            payload: { type: "text", ...defaultText, ...payload}
        }
}
export const deleteMesh = (meshId) => ({
    type: DELETE_MESH,
    payload: meshId
})
export const updateMesh = (meshId, updatedObject) => ({
    type: UPDATE_MESH,
    payload: { id: meshId, object: updatedObject }
})
export const selectMesh = (objectId, objectType) => ({
    type: SELECT_OBJECT,
    payload: { id: objectId, type: objectType }
})
export const scaleUpMesh = (ObjectId) => ({
    type: SCALE_UP_MESH,
    payload: ObjectId
})
export const scaleDownMesh = (ObjectId) => ({
    type: SCALE_DOWN_MESH,
    payload: ObjectId
})


// export const ADD_TEXT = "ADD_TEXT"
// export const EDIT_TEXT = "EDIT_TEXT"
// export const UPDATE_TEXT = "UPDATE_TEXT"
// export const SELECT_TEXT = "SELECT_TEXT"
// export const DELETE_TEXT = "DELETE_TEXT"


// export const addText = (text) => ({
//     type: ADD_TEXT,
//     payload: { ...defaultText, text }
// })
// export const editText = (textId, updatedText) => ({
//     type: EDIT_TEXT,
//     payload: { id: textId, text: updatedText }
// })
// export const updateText = (textId, updatedText) => ({
//     type: UPDATE_TEXT,
//     payload: { id: textId, text: updatedText }
// })
// export const selectText = (textId) => ({
//     type: SELECT_TEXT,
//     payload: { id: textId }
// })
// export const deleteText = (id) => ({
//     type: DELETE_TEXT,
//     payload: id
// })