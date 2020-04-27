import React from "react"
import Typography from "@material-ui/core/Typography"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import Poly from "../tabs/Poly"
import Share from "../tabs/Share"
import Scene from "../tabs/Scene"
import Mesh from "../tabs/Mesh"
import Text from "../tabs/Text"

export default () => (
    <Tabs>
        <TabList>
            <Tab>
                <Typography>
                    Text
                </Typography>
            </Tab>
            <Tab>
                <Typography>
                    Scene
                </Typography>
            </Tab>
            <Tab>
                <Typography>
                    Poly
                </Typography>
            </Tab>
            <Tab>
                <Typography>
                    Mesh
                </Typography>
            </Tab>
            <Tab>
                <Typography>
                    Share
                </Typography>
            </Tab>
        </TabList>

        <TabPanel>
            <Text />
        </TabPanel>

        <TabPanel>
            <Scene />
        </TabPanel>

        <TabPanel style={{ overflow: "scroll" }}>
            <Poly />
        </TabPanel>

        <TabPanel style={{ overflow: "scroll" }}>
            <Mesh />
        </TabPanel>

        <TabPanel>
            <Share />
        </TabPanel>
    </Tabs>
)

