import React from 'react';

class Damage extends React.Component {

    state={
        value: this.props.value,
        type: this.props.type
    }

    incrementTen = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 10
            } 
        })
    }

    incrementOne = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
            } 
        })
    }

    decrementOne = () => {
        if(this.state.value > 0 ) {
            this.setState(prevState => {
                return {
                    value: prevState.value - 1
                } 
            })
        } 
    }

    decrementTen = () => {
        if(this.state.value >= 10) {
            this.setState(prevState => {
                return {
                    value: prevState.value - 10
                } 
            })
        } else if (this.state.value < 10) {
            this.setState(() => {
                return{
                    value: 0
                }
            })
        }
        
    }

    handleDamage = (value) =>{
        this.props.damage(value)
        this.setState(() => {
            return {
                value: 0
            }
        })
    }

    handleHeal = (value) =>{
        this.props.heal(value)
        this.setState(() => {
            return {
                value: 0
            }
        })
    }
    

     

    render() {
        return (
            <div className='damageComp'>
                <button className='heal' onClick={() => this.handleHeal(this.state.value)}>Heal</button>
                <div className='numberChange'>
                    <div className='incrementBtns'>
                        <button className='decrementDamage10' onClick={this.decrementTen} type='button'>-10</button>
                        <button className='decrementDamage' onClick={this.decrementOne} type='button'>-1</button>
                    </div>
                    <p>{this.state.value}</p>
                    <div className='decrementBtns'>
                        <button className='incrementDamage10' onClick={this.incrementTen} type='button'>+10</button>
                        <button className='incrementDamage' onClick={this.incrementOne} type='button'>+1</button>
                    </div>
                </div>
                <button className='damage' onClick={() => this.handleDamage(this.state.value)}>Damage</button>
            </div>
        )
    }
    
}

export default Damage;