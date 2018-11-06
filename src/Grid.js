import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 200,
    height: 200,
    fontSize: "150px"
  },
  input: {
    display: "none"
  }
});

class Grid extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          {this.props.lines.map((e, index) => (
            <div>
              <Button
                variant="contained"
                color="primary"
                className={["ticCase", classes.button].join(" ")}
                onClick={() => this.props.chose(index, 0)}
              >
                {e[0]}
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={["ticCase", classes.button].join(" ")}
                onClick={() => this.props.chose(index, 1)}
              >
                {e[1]}
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={["ticCase", classes.button].join(" ")}
                onClick={() => this.props.chose(index, 2)}
              >
                {e[2]}
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Grid);
