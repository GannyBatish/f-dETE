import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context';
import '../css/App.css'

const Navbar = () => {
    const loc=useLocation();
    const history=useNavigate();
    const trans=()=>{
        if(loc.pathname==='/')
        {
            return 't1'
        }
        if(loc.pathname==='/about')
        {
            return 't2'
        }
        if(loc.pathname==='/contact')
        {
            return 't3'
        }
        if(loc.pathname==='/admin')
        {
            return 't4'
        }
    }
    const {admin,users,setUsers}=GlobalContext();
    useEffect(()=>{
        if(!users && loc.pathname==='/admin')
        {
            history('/')
        }
    },[users,admin])
  return (
    <nav className='nav'>
        <div className='nav-logo'>
            <div className='logo-item'>THE</div>
            <div className='logo-item'>
                <span>FITNESS</span>
                <span>CLUB</span>
            </div>
        </div>
        <div className='nav-link'>
            <div className={`active ${trans()}`}></div>
            <ul className='nav-list'>
                <li><Link className={`link ${trans()==='t1' && 'link-active'}`} to='/'>HOME</Link></li>
                <li><Link className={`link ${trans()==='t2' && 'link-active'}`} to='/about'>ABOUT US</Link></li>
                <li><Link className={`link ${trans()==='t3' && 'link-active'}`} to='/contact'>CONTACT US</Link></li>
                <li style={{
                    display:admin && users?'block':'none'
                }}><Link className={`link ${trans()==='t4' && 'link-active'}`} to='/admin'>ADMIN</Link></li>
            </ul>
        </div>
        {users?<Link className='login' onClick={()=>{
            setUsers(null);
        }}>Logout</Link>
        :
        <Link className='login' to='/login'>Login</Link>
        }
    </nav>
  )
}

export default Navbar