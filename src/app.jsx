import React from 'react';
import Agenda from './components/agenda.jsx';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                  <Agenda />
            </div>
        );
    }

}


export default App;
