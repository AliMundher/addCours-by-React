
import CursForm from './components/formcours';
import CursList from './components/courslist';
import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    curses: [
      { name: "Html" },
      { name: "JavaScript" },
      { name: "Pug.js" },
      { name: "Css" },
    ],
    currentCurse: ""
  };

  // Update Function
  update = (e) => {
    this.setState({
      currentCurse: e.target.value
    })
  }

  //Add Curse function
  addCurse = (e) => {
    e.preventDefault();
    let newCurses = this.state.currentCurse;
    let allCurses = this.state.curses;
    allCurses.push({ name: newCurses });
    this.setState({
      curses: allCurses,
      currentCurse: ""
    });
  }

  // Delete Curse Function
  delete = (index) => {
    let all_corses = this.state.curses;
    all_corses.splice(index, 1);
    this.setState({
      curses: all_corses
    })
  }

  // Edite Curse Function 
  editeCurse = (index, newValue) => {
    let allCurses = this.state.curses;
    let curse = allCurses[index];
    curse["name"] = newValue;
    this.setState({ curses: allCurses })
  }

  render() {
    const all_corses = this.state.curses;
    const results = all_corses.map((curs, index) => {
      return <CursList items={curs}
        key={index} btn_delete_curse={this.delete} i={index}
        fun_edite={this.editeCurse} />
    });
    return (
      <div className="App">
        <h2 className="title">add curse</h2>
        <CursForm
          fun_update={this.update}
          fun_add_curse={this.addCurse}
          empty_current={this.state.currentCurse} />

        {(this.state.curses.length > 0 ?
          <ul className="list_items">
            {results}
          </ul> : <h2 className="error_msg">there are not items</h2>)}

      </div>
    );
  }
}

export default App;
