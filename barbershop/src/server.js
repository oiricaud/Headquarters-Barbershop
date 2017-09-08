import path from 'path';
import express from 'express';
import React from 'react';
import App from './App';

// We are going to fill these out in the sections to follow.
function handleRender(req, res) {
    /* ... */
}

function renderFullPage(html, preloadedState) {
    /* ... */
}

const app = express();

// This is fired every time the server side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);