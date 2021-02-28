import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AlbumDetails } from '../Components/AlbumDetails/AlbumDetails'
import Home from '../Components/Home/Home'
import { Navbar } from '../Components/Navbar/Navbar'
import { Profile } from '../Components/Profile/Profile'
import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (<div>
                <Navbar/>
                <Switch>
                <Route path="/" exact render={(props) => <Home {...props}/>} />
                <Route path="/profile/:_id" exact render={(props) => <Profile {...props}/>} />
                <Route path="/album" exact render={()=><AlbumDetails />}/>
                {/* <PrivateRoute exact path = "/profile" Component={Profile}/> */}
                <Route render={()=><h1>Page Not Found</h1>} />
            </Switch>
        </div>
    )
}

export default Routes
