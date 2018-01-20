import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setInfo} from '../redux/user.redux'
import {getChatUser} from '../redux/chat.redux'
import {withRouter} from 'react-router-dom'
@connect(
  null,
  {setInfo,getChatUser}
)
@withRouter
class AuthRouter extends React.Component{
  componentDidMount(){
    
    const publicpath = ['/login','/register']
    const pathname= this.props.location.pathname
    if(publicpath.indexOf(pathname)>-1){
      return null
    }
    axios.get('/api/user/info').then(res=>{
      if(res.data.code===0){
        this.props.setInfo(res.data.data)
        this.props.getChatUser(res.data.data.type)
      }else{
        this.props.history.push('/login')
      }
    })
  }
  render(){
    return (
      null
    )
  }
}

export default AuthRouter 