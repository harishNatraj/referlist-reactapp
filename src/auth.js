import React, {Component} from 'react';
export default function(WrappedComponent) {
    return class Auth extends Component {
        componentDidMount() {
            const user_data = localStorage.getItem('id');
            if (!user_data) {
                this.props.history.push('/Signup')
            }
        }
        render() {
            console.log({...this.props})
            return(
                <WrappedComponent {...this.props} />
            )
        }

    }
}