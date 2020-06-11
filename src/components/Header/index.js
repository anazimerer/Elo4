import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Elo4 from '../../assets/images/Icon.png';
import Bar from '../../assets/images/Vector.png';
import { NavMenu } from './styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  color: {
    background: 'white',
  },
  button: {
    background: '#1DA89A',
    width: '119px',
    height: '31px',
    color: 'white',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'normal',
    fontFamily: 'Puritan',
    marginLeft: theme.spacing(5),
    '&:hover': {
      background: '#118f82',
    },
  },
  icon: {
    color: 'black',
    fontSize: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(5),
  },
  search: {
    position: 'relative',

    borderRadius: theme.shape.borderRadius,
    border: 'solid 1px',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  searchIcon: {
    color: 'black',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    color: 'black',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.color}>
      <AppBar className={classes.color}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={Elo4} />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <NavMenu>Moças</NavMenu>
          <NavMenu>Rapazes</NavMenu>
          <NavMenu>Kids</NavMenu>
          <NavMenu>Casa</NavMenu>
          <img src={Bar} />

          <HelpOutlineIcon className={classes.icon} />
          <NavMenu>Entrar</NavMenu>
          <Button className={classes.button}>Comprar</Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
