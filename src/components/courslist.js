import React from 'react';

class CursList extends React.Component {

    state = {
        isEdite: false
    }
    // ListCurent Function
    renderListCurse = () => {
        return (
            <li className="li_curse">
                <span className="name_curse">{this.props.items.name}</span>
                <button onClick={() => { this.toggleState() }}
                    className="btn_edit" >edite curse</button>
                <button onClick={() => this.props.btn_delete_curse(this.props.i)}
                    className="btn_delete">delete curse
                </button>
            </li>
        )
    }

    // updateCurseItem Function
    updateCurseItem = (e) => {
        e.preventDefault();
        this.props.fun_edite(this.props.i, this.input.value);
        this.toggleState()
    }
    // Update Form Function
    updateForm = () => {
        return (
            <form onSubmit={this.updateCurseItem}>
                <input type="text" defaultValue={this.props.items.name} ref={(v) => { this.input = v }} className="update_in" />
                <button className="btn_update">update curse</button>
            </form>
        )
    }

    // IsEdited Function
    toggleState = () => {
        let newIsEdite = this.state.isEdite;
        this.setState({
            isEdite: !newIsEdite
        });
    }

    render() {
        return (
            <React.Fragment>
                { this.state.isEdite ? this.updateForm() : this.renderListCurse()}
            </React.Fragment>
        )
    }
}

export default CursList;