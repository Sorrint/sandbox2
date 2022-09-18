import React, { Component } from 'react';
import Formula1 from './Components/ui/formula1/formula1.jsx';
import Header from './layouts/header.jsx';
import NavBar from './layouts/navBar.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import Shops from './Components/page/shops/shops.jsx';
import Goods from './Components/page/goods/goods.jsx';
import GoodsAcceptance from './Components/page/goodsAcceptance/goodsAcceptance.jsx';
import GoodsMarking from './Components/page/goodsMarking/goodsMarking.jsx';
import Clients from './Components/page/clients/clients.jsx';
import Loyality from './Components/page/loyality/loyality.jsx';
import PaidOptions from './Components/page/paidOptions/paidOptions.jsx';
import News from './Components/page/news/news.jsx';
import Support from './Components/page/support/support.jsx';
import Question from './Components/page/question/question.jsx';
import Applications from './Components/page/applications/applications.jsx';
import Promo from './Components/page/promo/promo.jsx';
import Documents from './Components/page/documents/documents.jsx';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="wrapper">
                    <NavBar />
                    <div className="content-container">
                        <Switch>
                            <Route path="/" exact component={Formula1} />
                            <Route path="/shops" component={Shops} />
                            <Route path="/goods" component={Goods} />
                            <Route path="/goods-acceptance" component={GoodsAcceptance} />
                            <Route path="/goods-marking" component={GoodsMarking} />
                            <Route path="/clients" component={Clients} />
                            <Route path="/loyality" component={Loyality} />
                            <Route path="/paid-options" component={PaidOptions} />
                            <Route path="/news" component={News} />
                            <Route path="/support" component={Support} />
                            <Route path="/question" component={Question} />
                            <Route path="/applications" component={Applications} />
                            <Route path="/promo" component={Promo} />
                            <Route path="/documents" component={Documents} />
                            <Route path="/dashboard" component={Formula1} />
                            <Redirect to="/dashboard" />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
