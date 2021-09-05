import { Switch, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import MyBoard from '../../pages/MyBoard/MyBoard';

const AppRouter = () => {

    return (
        <Switch>
            <Route path='/' render={() => <MainPage />} exact />
            <Route path='/myboard' render={() => <MyBoard />} exact />
        </Switch>
    )
}

export default AppRouter