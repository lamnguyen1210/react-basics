import React from 'react';
import { connect } from 'react-redux';
import { increaseCount } from '../../actions/admin';

class ClassUsesConnect2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        }
    }

    render() {
        console.log(this);
        return (
            <div>
                <p>Admin count: {this.props.admin.count}</p>
                <button onClick={this.props.increaseCount}>Increment</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    admin: state.admin
})

const mapDispatchToProps = {
    increaseCount
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassUsesConnect2)