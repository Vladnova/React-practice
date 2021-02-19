import React from "react";
import PaintingList from "./PaintingList";
import paintings from "./paintings.json"
import Panel from "./Panel";





const App = () => {
    return <div>
        <Panel title="свіжі новини">
            <p>Привіт</p>
        </Panel> 
        <Panel>
            <p>Пока</p>
        </Panel> 
        <h1>Головна компонент сторінка</h1>
        <PaintingList paintings={paintings}/>
    </div>
}

export default App;