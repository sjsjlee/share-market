import { HomePage, JoinPage, NotFoundPage, EditorPage } from 'pages'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Base from 'containers/common/Base'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import LoginModal from 'components/common/LoginModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  }
}))

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/join' component={JoinPage} />
            <Route exact path='/post/editor/:post_id?' component={EditorPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Base />
        </Container>
        <Footer />
      </div>
      <LoginModal/>
    </BrowserRouter>

  )
}

export default App