import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as joinFormActions from 'store/modules/joinForm'
import { withRouter } from 'react-router-dom'
import JoinForm from 'components/join/JoinForm'


export class JoinFormContainer extends Component {
    handleChangeInput = ({ name, value }) => {
        const { JoinFormActions } = this.props
        JoinFormActions.changeInput({ name, value })
    }
    handleSubmit = async () => {
        const { username, password, email, history } = this.props
        const { JoinFormActions } = this.props

        try {
            await JoinFormActions.postUsers({ username, password, email })
            history.push('/')
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { username, password, email } = this.props
        const { handleChangeInput, handleSubmit } = this
        return (
            <JoinForm
                onChangeInput={handleChangeInput}
                onSubmit={handleSubmit}
                username={username}
                password={password}
                email={email}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.joinForm.get('username'),
    password: state.joinForm.get('password'),
    email: state.joinForm.get('email'),
})

const mapDispatchToProps = (dispatch) => ({
    JoinFormActions: bindActionCreators(joinFormActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JoinFormContainer))
