import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid";
import { Typography, Button } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "x",
      lines: [["", "", ""], ["", "", ""], ["", "", ""]],
      lastPlay: [],
      end: false,
      message: ""
    };
  }

  chose(line, col) {
    if (!this.state.end) {
      var newLines = this.state.lines;
      if (newLines[line][col] === "") {
        newLines[line][col] = this.state.player;
        if (this.state.player === "x") {
          this.setState({ player: "o" });
        } else {
          this.setState({ player: "x" });
        }
        this.setState({ lines: newLines, lastPlay: [line, col] });
      }

      this.checkEnd();
    }
  }

  checkEnd() {
    console.log(this.state.lastPlay);
    var grid = [];
    var victory = false;
    var fullGrid = true;
    grid.push(this.state.lines[0]);
    grid.push(this.state.lines[1]);
    grid.push(this.state.lines[2]);
    grid.push([
      this.state.lines[0][0],
      this.state.lines[1][0],
      this.state.lines[2][0]
    ]);
    grid.push([
      this.state.lines[0][1],
      this.state.lines[1][1],
      this.state.lines[2][1]
    ]);
    grid.push([
      this.state.lines[0][2],
      this.state.lines[1][2],
      this.state.lines[2][2]
    ]);
    grid.push([
      this.state.lines[0][0],
      this.state.lines[1][1],
      this.state.lines[2][2]
    ]);
    grid.push([
      this.state.lines[0][2],
      this.state.lines[1][1],
      this.state.lines[2][0]
    ]);
    grid.forEach(line => {
      if (line[0] === line[1] && line[0] === line[2] && line[0] !== "") {
        victory = true;
        this.setState({
          end: true,
          message: "Victory of " + line[0] + " !!!!"
        });
        var e = document.getElementsByClassName("ticCase");
        for (var i = 0; i < e.length; i++) {
          e[i].disabled = true;
        }
      }
    });
    if (!victory) {
      this.state.lines.forEach(l => {
        if (l.includes("")) {
          fullGrid = false;
        }
      });

      if (fullGrid) {
        this.setState({ end: true, message: "no winner !!" });
        var e = document.getElementsByClassName("ticCase");
        for (var i = 0; i < e.length; i++) {
          e[i].disabled = true;
        }
      }
    }
  }

  restart() {
    this.setState({
      player: "x",
      lines: [["", "", ""], ["", "", ""], ["", "", ""]],
      lastPlay: [],
      end: false,
      message: ""
    });
    var e = document.getElementsByClassName("ticCase");
    for (var i = 0; i < e.length; i++) {
      e[i].disabled = false;
    }
  }

  render() {
    return (
      <div className="App">
        <Typography variant="display3">Play game</Typography>
        <Button
          color="secondary"
          style={{ fontSize: "larger" }}
          onClick={this.restart.bind(this)}
        >
          restart
        </Button>
        <Typography>Player : {this.state.player}</Typography>
        <Grid lines={this.state.lines} chose={this.chose.bind(this)} />
        <Typography variant="display3" color="secondary">
          {this.state.message}
        </Typography>
      </div>
    );
  }
}

export default App;
