/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';

interface IIndexProps {

}

interface IIndexState {

}

class Index extends React.Component<IIndexProps, IIndexState> {

    public render(): React.ReactElement<{}> {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <p>Activate the plot device.</p>
                </body>
            </html>
        );
    }
}

export default Index;