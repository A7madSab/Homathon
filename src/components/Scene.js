import React, { createRef, Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { connect } from "react-redux"
import OrbitControl from "../buildComponents/OrbitControl"
import Model from "../buildComponents/Model"
import Camera from "../buildComponents/Camera"
import SkyBox from "../buildComponents/SkyBox"
import VrButton from "../buildComponents/VrButton"
import TextGeometry from "../buildComponents/TextGeometry"

import BoxGeometry from "../buildComponents/BoxGeometry"

const Scene = ({ sceneProps, meshReducer }) => {
    const orbitRef = createRef();
    const cameraRef = createRef();

    return (
        <Canvas
            vr={true}
            orthographic={sceneProps.orthographic}
            camera={{
                position: sceneProps.camera.position,
            }}
        >
            {
                meshReducer.meshes.map((mesh, key) => {
                    if (mesh.type === "Box-Geometry")
                        return <BoxGeometry orbit={orbitRef} key={mesh.id} name={mesh.id} />
                    else if (mesh.type === "Text") {
                        console.log("mesh", mesh)
                        return (
                            <Suspense key={key} fallback={null}>
                                <TextGeometry orbit={orbitRef} key={mesh.id} name={mesh.id} text={mesh.text} />
                            </Suspense>
                        )

                    } else {
                        return (
                            <Suspense key={key} fallback={null}>
                                <Model orbit={orbitRef} key={mesh.id} name={mesh.id} url={mesh.url} murl={mesh.murl} />
                            </Suspense>
                        )
                    }
                })
            }

            {/* <Suspense fallback={null}>
                <TextGeometry text={"Ahmad Sabry aly \n <i>asjkd</i> "} />
            </Suspense> */}

            <gridHelper args={[20, 20]} />
            <pointLight position={[5, 5, 10]} />
            <Camera ref={cameraRef} />
            <OrbitControl ref={orbitRef} />
            <SkyBox />

            <VrButton />


            {/* <Dom position={[0, 5, 0]}>
                <iframe title="hello" width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </Dom> */}

            <ambientLight intensity={0.5} />
            <spotLight
                intensity={0.6}
                position={[30, 30, 50]}
                angle={0.2}
                penumbra={1}
                castShadow
            />
        </Canvas>
    )
}

const mapStateToProps = (state) => ({
    sceneProps: state.sceneReducer,
    meshReducer: state.meshReducer,
    textReducer: state.textReducer
})

export default connect(mapStateToProps)(Scene)