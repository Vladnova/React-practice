import React from 'react';
// import Logo from './components/Logo';
import PaintingsList from './components/PaintingList/PaintingList';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Panel from './components/Panel/Panel';
import Notification from './components/Notification/Notification';

import Layout from './components/Layout/Layout';





const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <Layout>     
        <ColorPicker options={colorPickerOptions} />
        <Notification text="Все ок" type="success" />
        <Notification text="Все погано" type="error" />
        <Panel title="Последние новости">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            obcaecati dolorum assumenda vitae aspernatur, aliquid numquam
            explicabo, facere tenetur unde dolorem quo! Sit iusto natus at,
            aliquam, repellendus repellat ipsa eligendi dolorem tempore atque
            reprehenderit nulla magnam reiciendis, aliquid minus tenetur ipsam
            fuga. Quas vel, sunt voluptatum debitis incidunt numquam?
        </p>
        </Panel>
        <PaintingsList paintings={paintings} />
    </Layout>
  );
};

export default App;
