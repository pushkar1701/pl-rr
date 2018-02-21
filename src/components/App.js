import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
                <h1>Resume Application</h1>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;