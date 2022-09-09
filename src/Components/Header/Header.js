import React,{useContext} from 'react';
import {Link, useHistory} from 'react-router-dom'
import swal from 'sweetalert';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContxt, FirebaseContext} from '../../store/Context'
import Login from '../Login/Login';
function Header() {
  const history= useHistory()
  const {user} = useContext(AuthContxt)
  const {firebase} = useContext(FirebaseContext)


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? user.displayName : <Link to={"/login"}>Login</Link>}</span>
          <hr />
          
        </div>
          {user && <span onClick={()=>{
            swal({
  title: "Are you sure?",
  text: "are You Sure to Logout !!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) { 
    firebase.auth().signOut();
            history.push('/login')
    swal("Logout is Successfully Completed", {
      icon: "success",
    });
  } else {
    swal("Logout failed !");
  }
})
}}> Logout</span> }

{user ?
<Link to={'/create'}>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        </Link> :<Link to={'/login'}></Link>  }
      </div>
    </div>
  );
}

export default Header;
