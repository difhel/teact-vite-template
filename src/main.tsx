import React from './lib/teact/teact';
import TeactDOM from './lib/teact/teact-dom';

import { STRICTERDOM_ENABLED } from "./config";
import { App } from "./App";
import { enableStrict } from './lib/fasterdom/fasterdom';

if (STRICTERDOM_ENABLED) {
    enableStrict();
}

TeactDOM.render(
    <App/>,
    document.getElementById('root')!,
);
