import React, { useState } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../../firebase.init'
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DrawerComp from "./Drawer";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <MedicalServicesIcon sx={{ transform: "scale(2)" }} />
            <Typography sx={{ fontSize: "1rem", paddingLeft: "4%" }}>
              HAPPYDOCS
            </Typography>
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  HAPPYDOCS
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Home" />
                  <a href="/details" >Details</a>
                  <Tab label="About " />
                  <Tab label="Contact Us" />
                </Tabs>
                <span>{user?.displayName && user.displayName} </span>
                {
                    user?.uid 
                    ?
                    <button onClick={() => signOut(auth)}>Log Out</button>
                    :
                     <Link to="/login">Login</Link>
                }
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default Header;
