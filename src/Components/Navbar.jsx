import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { Footer, Logos, Titles, Follow } from "../styles/Navbar";

export default class Navbar extends Component {

render(){
    return (
      <Fragment>
        <Footer>
          <Logos>
            <img as={Link} alt="logo" to="/categories" width="24" height="24" src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645160130/Sprint%202/icons%20/Property_1_home_tsyafh.svg" />
            <img as={Link} alt="logo" to="/stats" width="24" height="24" src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645160280/Sprint%202/icons%20/Property_1_activity_bzdzjz.svg" />
            <img as={Link} alt="logo" to="/profile" width="24" height="24" src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1645160281/Sprint%202/icons%20/Property_1_user_smkfky.svg" />
          </Logos>
          <Titles>
            <Follow as={Link} to="/categories" >Home</Follow>
            <Follow as={Link} to="/stats" >Estadísticas</Follow>
            <Follow as={Link} to="/profile" >Perfil</Follow>
          </Titles>
        </Footer>
      </Fragment>
    )
  }
}

