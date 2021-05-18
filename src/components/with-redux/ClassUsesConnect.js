import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, fetchPageData } from '../../actions/admin';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        }
    }

    render() {
        console.log(this.props.admin.pageLoading);
        return (
            <div>
                {/* <p>Admin count: {this.props.admin.count}</p> */}
                <button onClick={this.props.increaseCount}>Increment</button>
                <button onClick={this.props.fetchPageData}>fetch</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(`state`, state);
    return ({
        admin: state.admin
    })
}

const mapDispatchToProps = {
    increaseCount,
    fetchPageData
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     // console.log('dispatch', dispatch)
//     // console.log('ownProps', ownProps)
//     return {
//         increaseCount: () => dispatch(increaseCount())
//     }
// }

const ConnectComponent = connect(mapStateToProps, mapDispatchToProps)(Example)
// const ConnectComponent = connect(mapStateToProps, null)(Example)

const ClassUsesConnect = () => {
    return (
        <ConnectComponent id={5555} />
    )
}

export { ClassUsesConnect }

