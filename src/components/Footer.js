import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <button className ='add-player' onClick={this.props.addPlayer}><p>Add Player</p></button>
                <button className ='add-enemy' onClick={this.props.addEnemy}><p>Add Enemy</p></button>
            </div>
        )
    }
}

export default Footer