import React from 'react';

class Connections extends React.Component {
    state = {
        displayFriends: false
    }

    render() {
        const showFriends = this.state.displayFriends;

        return (
            <div className='connections'>
                <div>915</div>
                <h4>Your connections</h4>
                <button 
                onMouseLeave={this.mouseLeaveHandler} 
                onMouseEnter={() => {console.log('entered')}}
                onClick={this.toggleFriends}
                >
                    {showFriends === true ? ('Hide') : ('Show')} Connections
                </button>
                {this.state.displayFriends === true ? (
                    <ul>
                        {this.props.connections.map((connection) => {
                            return <li key={connection.id}>{connection.firstName} {connection.lastName} {connection.jobTitle}</li>
                        })}
                    </ul>
                ) : null} 
            </div>
        ) // return
    } // render

    toggleFriends = () => {
        const showingFriends = this.state.displayFriends;
        this.setState({ displayFriends: !showingFriends });

        //this.setState((currentState) => {
        //   return {displayFriends: !currentState.displayFriends}
        //});      
    };

    mouseLeaveHandler = () => {
        console.log('left');
    }; 
} // class

export default Connections;