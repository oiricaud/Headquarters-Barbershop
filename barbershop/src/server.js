import path from 'path';
import express from 'express';
import React from 'react';
import App from './App';

// We are going to fill these out in the sections to follow.
function handleRender(req, res) {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a theme instance.
    const theme = createMuiTheme({
        palette: {
            primary: green,
            accent: red,
            type: 'light',
        },
    });

    // Configure JSS
    const jss = create(preset());
    jss.options.createGenerateClassName = createGenerateClassName;

    // Render the component to a string.
    const html = renderToString(
        <JssProvider registry={sheetsRegistry} jss={jss}>
            <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
                <App />
            </MuiThemeProvider>
        </JssProvider>
    )

    // Grab the CSS from our sheetsRegistry.
    const css = sheetsRegistry.toString()

    // Send the rendered page back to the client.
    res.send(renderFullPage(html, css))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Material-UI</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
      </body>
    </html>
  `;
}



const app = express();

// This is fired every time the server side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);