import { VictoryChart, VictoryLine } from "victory";
import {VictoryTheme} from "victory-core";

let data = [
    {x: 1, y: 100},
    {x: 2, y: 90},
    {x: 3, y: 80},
    {x: 4, y: 70},
    {x: 5, y: 60},
    {x: 6, y: 50},
    {x: 7, y: 70},
    {x: 8, y: 80},
    {x: 9, y: 90},
    {x: 10, y: 100},
    {x: 11, y: 90},
    {x: 12, y: 50},
]

export const Graph = () => {
    return (
        <VictoryChart
            theme={VictoryTheme.material}
            width={1500}

        >
            <VictoryLine
                style={{
                    data: { stroke: "#c43a31"},
                    parent: { border: "1px solid #ccc"}

                }}
                data={data}
            />
        </VictoryChart>
    )
}