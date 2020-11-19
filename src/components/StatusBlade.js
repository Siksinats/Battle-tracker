import React from 'react'; 

class StatusBlade extends React.Component {
    state = {
            
            }

    exit = () => {
        document.getElementsByClassName('status-wrapper')[0].classList.toggle('height')
    }

    render() {
        return (
            <div class='status-wrapper'>
                <h2>{this.props.statusName}</h2>
                <button className='exitBtn' onClick={this.exit}>&#10005;</button>
                <ul>
                    {this.props.statusInfo.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default StatusBlade