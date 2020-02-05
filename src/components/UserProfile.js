import React from 'react'
import {Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.currentUser
    }
}


export default connect(mapStateToProps)(UserProfile)