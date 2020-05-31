import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
//react scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
const userList = [
  {
    id: 1,
    user_name: "Dr. Brian Madrai",
    date: "Tommorrow 12:15PM",
    image: require('./assets/my-image.jpg'),
    date_time: [
      {
        date: "Mon. June 1 2020",
        status: "Brian Madrai appointment availalbe online",
        time_list: []
      },
      {
        date: "Tue. June 2 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Wed. June 3 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Thu. June 4 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Fri. June 5 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sat. June 6 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sun. June 7 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      }
    ]
  },
  {
    id: 2,
    user_name: "Dr. Pu chengxian",
    date: "Mon June 15 at 12:15PM",
    image: require('./assets/Untitled-1.png'),
    date_time: [
      {
        date: "Mon. June 15 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Tue. June 16 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Wed. June 17 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Thu. June 18 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Fri. June 19 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sat. June 20 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sun. June 21 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      }
    ]
  },
  {
    id: 3,
    user_name: "Dr. Jin Xiang Mei",
    date: "Tue June 20 at 12:15PM",
    image: require('./assets/profile_logo_32338675.jpg'),
    date_time: [
      {
        date: "Mon. June 20 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Tue. June 21 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Wed. June 22 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Thu. June 23 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Fri. June 24 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sat. June 25 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sun. June 26 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      }
    ]
  },
  {
    id: 4,
    user_name: "Dr. Shen Zheng Gu",
    date: "Tue 1 July at 12:15PM",
    image: require('./assets/Tang-Wenyuan-profile-photo.jpg'),
    date_time: [
      {
        date: "Mon. July 1 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Tue. July 2 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Wed. July 3 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Thu. July 4 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Fri. July 5 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sat. July 5 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sun. July 6 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      }
    ]
  },
  {
    id: 5,
    user_name: "Dr. Li Cheng Mei",
    date: "Tue July 20 at 12:15PM",
    image: require('./assets/Tang-Wenyuan-profile-photo.jpg'),
    date_time: [
      {
        date: "Mon. July 20 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Tue. July 21 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Wed. July 22 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Thu. July 23 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Fri. July 25 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sat. July 26 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      },
      {
        date: "Sun. July 27 2020",
        status: "",
        time_list: {
          "am": ["08:30", "09:00", "09:30", "10:00", "11:00", "11:30"],
          "pm": ["01:00", "03:00", "03:30", "04:00", "04:30", "05:00", "06:00"]
        }
      }
    ]
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px 0px',
    border: '1px solid grey'
  },
  userItemHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  menuIcon:{
    fontSize: "40px",
    float: 'left',
    flexGrow: "1"
  },
  title: {
    flexGrow: "5"
  },
  avatar: {
    width: "50px!important",
    height: "50px",
    
  },
  formControl: {
    margin: theme.spacing(0),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  timeItem: {
    margin: '5px'
  }
}));
function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState(1);
  const [dateList, setDateList] = React.useState(userList[0].date_time);


  const handleChange = (event) => {
    setAge(event.target.value)
    setDateList(userList[event.target.value-1].date_time);
  };
  const handleClick = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>Test Page</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', borderLeft: '1px solid grey', borderTop: '1px solid grey'}}>
            <Typography variant="h4" className={classes.title}>Next Appointment Available</Typography>
            {userList.map(function(item, key) {
              return(
                <Paper className={classes.paper} key={key}>
                  <div className={classes.userItemHeader}>
                    <MenuIcon className={classes.menuIcon}/>
                    <Typography variant="h4" className={classes.title}>{item.user_name}</Typography>
                    <div style={{flexGrow: "1"}}>
                      <Avatar alt="Remy Sharp" src={item.image} className={classes.avatar} />
                    </div>
                    
                  </div>
                  <br />
                  <Typography variant="h6">{item.date}</Typography>
                </Paper>
              )
            })}
          </Grid>
          <Grid item xs={6} style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', borderTop: '1px solid grey'}}>
            <Typography variant="h4" className={classes.title}>Show Times: </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">All doctors</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="All doctors"
              >
                {userList.map((item, i) => {
                  return(
                    <MenuItem value={item.id} key={i}>{item.user_name}</MenuItem>
                  )
                })}
                
              </Select>
            </FormControl>
            <br />
            <br />
            
            <div style={{height: '700px'}}>
            <PerfectScrollbar>
            {dateList.map(function(item, i) {
              return(
                <div>
                  <Typography variant="h5" className={classes.title}>{item.date}</Typography>
                  <hr/>
                  <div style={{padding: '0px 10px'}}>
                    {item.status !== "" ? (
                      <Typography >{item.status}</Typography>
                    ) : (
                      <div>
                        <Typography >-AM-</Typography>
                        {item.time_list.am.map((item, i) => {
                          return (
                            <Chip
                              key={i}
                              icon={<AccessAlarmsIcon />}
                              label={item}
                              onClick={handleClick}
                              color="secondary"
                              variant="outlined"
                              className={classes.timeItem}
                            />
                          )
                        })}
                        <Typography >-PM-</Typography>
                        {item.time_list.pm.map((item, i) => {
                          return (
                            <Chip
                              key={i}
                              icon={<AccessAlarmsIcon />}
                              label={item}
                              onClick={handleClick}
                              color="secondary"
                              variant="outlined"
                              className={classes.timeItem}
                            />
                          )
                        })}
                      </div>
                    )}
                  </div>
                  <hr/>
                  <br />
                </div>
              )
            })}
            </PerfectScrollbar>
            </div>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;
