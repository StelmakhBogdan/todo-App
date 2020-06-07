import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddFrom extends Component {

    state = {
        label: ''
    };

    onLabelChange = ( e ) => {
      this.setState({
         label: e.target.value
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-from d-flex align-items-center"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What need to be done"
                       value={this.state.label}/>
                <button
                    className="btn btn-secondary">
                    Add
                </button>
            </form>
        )
    }
}
