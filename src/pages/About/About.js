import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import aboutPic from "../../Images/about.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import { AlignHorizontalLeft } from "@mui/icons-material";
import './About.css'

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%", 
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase
              className="about-image"
              sx={{ width: 300, height: 400 }}
            >
              <Img alt="complex" src={aboutPic} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Box className="tab-container">
                  <Box sx={{ width: "60%", margin: "auto" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Typography variant="h5" sx={{ marginTop: "15%" }}>
                        About Us
                      </Typography>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Work" {...a11yProps(0)} />
                        <Tab label="Mission" {...a11yProps(1)} />
                        <Tab label="Achievement" {...a11yProps(2)} />
                      </Tabs>
                    </Box>
                    <TabPanel
                      value={value}
                      index={0}
                      sx={{ textAlign: "left" }}
                    >
                      Aenean facilisis sodales est neciMorbi vitapurus on Est
                      facilisisro convallis commodo velante, tiam ltricies
                      lputate.Aenean facilisis sodales est neciMorbi vitapurus
                      on Est facilisisro convallis commodo velante, tiam
                      ltricies lputate.
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Aenean facilisis sodales est neciMorbi vitapurus on Est
                      facilisisro convallis commodo velante, tiam ltricies
                      lputate. Aenean facilisis sodales est neciMorbi vitapurus
                      on Est facilisisro convallis commodo velante, tiam
                      facilisis ltricies lputate.
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Aenean facilisis sodales est neciMorbi vitapurus on Est
                      facilisisro convallis commodo velante, tiam ltricies
                      lputate. Aenean facilisis sodales est neciMorbi vitapurus
                      on Est facilisisro convallis commodo velante, tiam
                      facilisis ltricies lputate.
                    </TabPanel>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
