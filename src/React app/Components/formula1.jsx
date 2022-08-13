import React, { Component, useState } from 'react';
import { Drivers } from './drivers.jsx';
import { Results } from './results.jsx';
import { Schedule } from './schedule.jsx';

class Formula1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null
        };
    }

    render() {
        return (
            <>
                <div className="app__content-head flex justify-center flex-row bg-white h-40 shadow-md shadow-gray-400/50">
                    <div className="app__content-container">
                        <div className="title h-20">
                            <h1 className="text-3xl font-bold underline text-black font-mono">Formula 1</h1>
                        </div>
                        <div className="app-ribbon text-xl font-bold text-black font-mono">
                            <div
                                className="app__button"
                                role="button"
                                onClick={() => this.setState({ ...this.state, content: <Schedule /> })}
                            >
                                Расписание
                            </div>
                            <div
                                className="app__button"
                                role="button"
                                onClick={() => this.setState({ ...this.state, content: <Results /> })}
                            >
                                Результаты
                            </div>
                            <div
                                className="app__button"
                                role="button"
                                onClick={() => this.setState({ ...this.state, content: <Drivers /> })}
                            >
                                Пилоты
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app__content-body">
                    <div className="app__content-container flex flex-wrap h-full">{this.state.content}</div>
                </div>
            </>
        );
    }
}

export default Formula1;
