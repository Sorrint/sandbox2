import React, { Component, useState } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
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
                    <div className="app__container">
                        <div className="title h-20">
                            <h1 className="text-3xl font-bold underline text-black font-mono">Formula 1</h1>
                        </div>
                        <div className="app-ribbon text-xl font-bold text-black font-mono">
                            <Link className="app__button " role="button" to="/dashboard/schedule">
                                Расписание
                            </Link>
                            <Link className="app__button" role="button" to="/dashboard/results">
                                Результаты
                            </Link>
                            <Link className="app__button" role="button" to="/dashboard/drivers">
                                Пилоты
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="app__body">
                    <div className="app__container flex flex-wrap h-full">
                        <Switch>
                            <Route path="/dashboard/schedule" exact component={Schedule} />
                            <Route path="/dashboard/results" component={Results} />
                            <Route path="/dashboard/drivers" component={Drivers} />
                            <Redirect to="/dashboard/schedule" />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

export default Formula1;
