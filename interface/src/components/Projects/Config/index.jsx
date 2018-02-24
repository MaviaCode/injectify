import ReactDOM, { render } from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'

import Permissions from './Permissions'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.paper,
  },
  '@media (max-width: 700px)': {
    root: {
      margin: theme.spacing.unit * 2,
    }
  },
  '@media (max-width: 500px)': {
    root: {
      margin: theme.spacing.unit,
    }
  },
  title: {
    color: 'rgb(57, 72, 171)',
    fontSize: '1.3em',
    marginBottom: 26,
    fontWeight: 400,
  },
  light: {
    color: 'rgb(255, 255, 255)'
  },
  '@media (min-width: 1100px)': {
    cardContainer: {
      display: 'flex'
    },
  },
  name: {
    display: 'flex',
    userSelect: 'none',
  },
  input: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
  },
  buttonSecondary: {
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.15)'
    },
  },
  leftIcon: {
    marginRight: 10,
  },
})

class Config extends React.Component {
  render() {
    const { classes, project, account, settings } = this.props

    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardContent>
            <Typography type="headline" className={`${classes.title} ${settings.dark ? classes.light : ''}`}>
              Project configuration
            </Typography>
            <Permissions group="owners" variant="owner" />
            <Permissions group="admins" variant="admin" />
            <Permissions group="readonly" variant="user" />
          </CardContent>
        </Card>
        {/* <div className={classes.cardContainer}>
          <RestAPI classes={classes} project={project.name} token={token} />
          <DomainFiltering classes={classes} filter={project.config.filter} write={!project.permissions.readonly.includes(loggedInUser.id)} emit={this.props.emit} projectName={project.name} />
        </div>
        <Dialog open={this.state.open || false} onClose={this.handleRequestClose}>
          {this.state.dialog == "remove" ? (
            <div>
              <DialogTitle>
                {loggedInUser.id == this.state.user.id ? (
                  `Remove yourself from ${project.name}?`
                ) : (
                  `Remove user ${this.state.user.login} from ${project.name}?`
                  )}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {loggedInUser.id == this.state.user.id ? (
                    <span>
                      You will <b>lose access</b> to this project!
                    </span>
                  ) : (
                      "They won't be able to access this project again (you can re-add them later)"
                    )}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleRequestClose} color="primary" autoFocus>
                  Cancel
                </Button>
                <Button onClick={this.handleDelete.bind(this)} color={loggedInUser.id == this.state.user.id ? "accent" : "primary"}>
                  {loggedInUser.id == this.state.user.id ? (
                    "Remove myself"
                  ) : (
                      "Remove"
                    )}
                </Button>
              </DialogActions>
            </div>
          ) : (
              <div>
                <DialogTitle>
                  Add user to project
              </DialogTitle>
                <DialogContent>
                  {this.state.addUser.method == "id" ? (
                    <div>
                      <DialogContentText>
                        Please enter a GitHub user ID to add to this project
                    </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        inputRef={(input) => { this.addUserName = input; }}
                        onKeyPress={(e) => { e.key === 'Enter' && this.handleAddUser() }}
                        label="GitHub user ID"
                        fullWidth
                      />
                    </div>
                  ) : (
                      <div>
                        <DialogContentText>
                          Please enter a GitHub username to add to this project
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          inputRef={(input) => { this.addUserName = input; }}
                          onKeyPress={(e) => { e.key === 'Enter' && this.handleAddUser() }}
                          label="GitHub username"
                          fullWidth
                        />
                      </div>
                    )}
                  <RadioGroup
                    value={this.state.addUser.method}
                    onChange={this.handleMethodChange}
                  >
                    <FormControlLabel value="username" control={<Radio />} label="Github Username" />
                    <FormControlLabel value="id" control={<Radio />} label="User ID" />
                  </RadioGroup>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleRequestClose} color="primary">
                    Cancel
                </Button>
                  <Button onClick={this.handleAddUser} color="primary">
                    Add
                </Button>
                </DialogActions>
              </div>
            )}
        </Dialog> */}
      </React.Fragment>
    )
  }
}

export default connect(({ injectify: {section, account, project, settings} }) => ({ section, account, project, settings }))(withStyles(styles)(Config))