import React from 'react';


class Header extends React.Component {

    start = (ruleset) => {
        this.props.start(ruleset)
    }
    
    render() {
        if(this.props.combat == false) {
            return (
                <header>
                <div className='header'>
                    <h1>Battle Tracker</h1>
                    <div className='header-details'>
                    <select name='edition' id='edition'>
                        <option value='ThreeE'>Third Edition</option>
                        <option value='FiveE' selected>5th Edition</option>
                    </select>
                        <button className='startBtn' onClick={() => this.start(document.getElementById('edition').value)}><p>Start</p></button>
                        <span>
                            Combatants:{this.props.combatants}
                        </span>
                    </div>
                    
                </div>
                    
                </header>
            )
        } else if(this.props.combat == true){
            return (
                <header>
                <div className='header'>
                    <h1>Battle Tracker</h1>
                    <div className='header-details'>
                    <button className='nextBtn' onClick={this.props.next}><p>Next</p></button>
                        <span>
                            Combatants:{this.props.combatants}
                        </span>
                    </div>
                    
                </div>
                    
                </header>
            ) 
        }
        
    }
    
}

export default Header; 
