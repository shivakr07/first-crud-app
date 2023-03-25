import {AppBar, Toolbar} from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
/* Adding style
suppose you have to apply the css on a component then  first you
need to store the css in that component
like here on AppBar then replace the AppBar --> Header
*/
const Header = styled(AppBar)`
    background : #111111
`
const Tabs = styled(NavLink)`
    font-size  : 20px;
    margin-right : 20px;
    text-decoration : none;
    color : inherit;

`
const NavBar = () => {
    return(
        <Header position = "static">
            <Toolbar>
                <Tabs to ='/'>Evans</Tabs>
                <Tabs to ='/all'>All User</Tabs>
                <Tabs to ='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;
