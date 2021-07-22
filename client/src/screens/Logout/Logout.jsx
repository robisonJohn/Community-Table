import { useEffect } from 'react'
import { logout } from '../../services/users'
import { useHistory } from 'react-router-dom'

const Logout = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const logoutUser = async () => {
      await logout()
      setUser(null)
      history.push('/')
    }
    logoutUser()
  }, [history, setUser])

  return ''
}

export default logout
