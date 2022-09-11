import React from 'react';
import { TaskList } from './components/TaskList/TaskList';
import { Header } from './styled-components/Heder';

export class App extends React.Component {  
    render() {
        return (
            <div className="app-container">
                <Header title="To do App"/>
                <TaskList/>
            </div>
        );
    }
} 