import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Nav from './Navigation'
import Body from './Body'
import { Route, Link } from 'react-router-dom'
import './styles/Container.css'
class Container extends React.Component {
    // state = {
    //     navHeight: '45px',
    //     style: this.props.style
    // }

    componentDidMount = () => {
        // this.props.history.push('/apps')
    }

    render = props => {
        console.log(this.props)
        const { currentTheme } = this.props.theme
        const containerStyle = {
            backgroundColor: currentTheme, 
            height: '100%', 
            overflow: 'auto',
            // minHeight: `480px`,            
            // padding: '2.5%'
        }
        return (
            <div 
            className="Container" 
            style={containerStyle}>
                <Body 
                {...this.props.theme}
                />
                <Nav {...this.props} />
            </div>

        );
    }
    
}

export default withTheme(Container)

