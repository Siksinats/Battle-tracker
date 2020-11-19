import React from 'react';



class Health extends React.Component {
    state = {
            maxHealth: this.props.maxHealth,
            currentHealth: this.props.currentHealth,
            healthPercent: this.props.healthPercent,
            healthColor: this.props.healthColor
            }

    

    render() {
        return (
            <div className='health-counter'>
                <div className='health-bar'>
                    <div className='health-percent' style={{width:this.props.healthPercent + '%', background:this.props.healthColor}}></div>
                    <div className='percent-blocks'>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                        <div className='healthBlock'></div>
                    </div>
                </div>
                <p className='health'>{ this.props.currentHealth}/{ this.props.maxHealth }</p>
            </div>
        )
    }
}

export default Health