import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { green, red } from 'material-ui/colors';
import App from './App';

class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return <App {...this.props} />
    }
}

// Create a theme instance.
const theme = createMuiTheme({
    palette: createPalette({
        primary: green,
        accent: red,
        type: 'light',
    }),
});

render(
    <MuiThemeProvider theme={theme}>
        <Main />
    </MuiThemeProvider>,
    document.querySelector('#root'),
);