import { selectAuth } from 'features/authSlice'

import {useSelector} from "react-redux";
import RedirectCountin from './RedirectCountin';
const PrivateRoute = ({children}:{children:any}) => {
  const {token} = useSelector(selectAuth);
console.log(token)
    return token ? children : <RedirectCountin/>
}

export default PrivateRoute