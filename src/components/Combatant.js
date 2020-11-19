import React from 'react';
import Health from './Health';
import Damage from './Damage';
import StatusBlade from './StatusBlade';
import Status from './Status';

let green = 'linear-gradient(180deg, rgba(51,241,0,1) 0%, rgba(161,255,151,1) 35%, rgba(16,164,4,1) 100%)'
let yellow = 'linear-gradient(180deg, rgba(255,253,54,1) 0%, rgba(250,252,226,1) 33%, rgba(249,255,0,1) 100%'
let red = 'linear-gradient(180deg, rgba(255,54,54,1) 0%, rgba(255,118,118,1) 33%, rgba(255,0,0,1) 100%'

function damageAnimation(element) {
    element.querySelector('.damageEffect').animate({
        opacity: [0,1,0]
      }, {duration: 1000,
        easing:'ease',
        offset:[0,.2,1]
    })
} 

function healAnimation(element) {
    element.querySelector('.healBackground').animate({
        opacity: [0,1,0]
      }, {duration: 2000,
        easing:'ease'
    })

    element.querySelector('.h1').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-20px,50px)',
                    'translate(-20px,-100px)',
                    'translate(-20px,-150px)',
                    'translate(-9px,-200px)',
                    'translate(-9px,-250px)',
                    'translate(0px,-300px)']
    },{duration:1400,
        easing:'ease-in-out'})

    element.querySelector('.h2').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(50px,-90px)',
                    'translate(100px,-180px)',
                    'translate(150px,-270px)',
                    'translate(200px,-340px)',
                    'translate(250px,-400px)']
    },{duration:1100,
        easing:'linear'})
    
    element.querySelector('.h3').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(5px,-100px)',
                    'translate(10px,-200px)',
                    'translate(15px,-300px)',
                    'translate(10px,-390px)',
                    'translate(5px,-450px)']
    },{duration:1200,
        easing:'linear'})

    element.querySelector('.h4').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-40px,-60px)',
                    'translate(-20px,-120px)',
                    'translate(-16px,-180px)']
    },{duration:1300,
        easing:'ease-in-out'})

    element.querySelector('.h5').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-50px,-60px)',
                    'translate(-100px,-120px)',
                    'translate(-150px,-180px)',
                    'translate(-200px,-230px)',
                    'translate(-250px,-280px)',
                    'translate(-300px,-320px)']
    },{duration:750,
        easing:'ease-in-out'})

    element.querySelector('.h6').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-20px,-50px)',
                    'translate(0px,-100px)',
                    'translate(20px,-150px)',
                    'translate(50px,-200px)']
    },{duration:1000,
        easing:'ease-in-out'})

    element.querySelector('.h7').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(30px,-70px)',
                    'translate(60px,-140px)',
                    'translate(90px,-210px)',
                    'translate(120px,-280px)',
                    'translate(150px,-320px)']
    },{duration:1500,
        easing:'ease-in-out'})

    element.querySelector('.h8').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-40px,-80px)',
                    'translate(-70px,-170px)',
                    'translate(-90px,-270px)',
                    'translate(-100px,-380px)']
    },{duration:1100,
        easing:'ease-in-out'})

    element.querySelector('.h9').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-45px,-100px)',
                    'translate(-90px,-200px)',
                    'translate(-135px,-300px)',
                    'translate(-170px,-400px)']
    },{duration:700,
        easing:'ease-in-out'})

    element.querySelector('.h10').animate({
        opacity: [0,1,0],
        transform: ['translate(0px,0px)',
                    'translate(-20px,-80px)',
                    'translate(-40px,-160px)',
                    'translate(-60px,-240px)',
                    'translate(-60px,-320px)',
                    'translate(-50px,-400px)']
    },{duration:1500,
        easing:'ease-in-out'})

        
}

function deathAnimation(element) {
    element.querySelector('.death').animate({
        opacity: [0,1]
    }, {duration: 500,
    easing:'ease-in'});

    element.querySelector('.death img').animate({
        height: ['400%', '100%'],
        top: ['-150%', '0%']
    }, {duration: 700,
    easing:'ease-in'});

    element.querySelector('.death').style.opacity = 1
    element.querySelector('.death img').style.height = '100%'
    element.querySelector('.death img').style.top = '0%'
}

class Combatant extends React.Component {


    state={
            ac: this.props.ac,
            combatant: this.props.combatant,
            currentHealth: this.props.currentHealth,
            maxHealth: this.props.maxHealth,
            healthPercent: (this.props.currentHealth/this.props.maxHealth)*100,
            healthColor: green,
            initiative: this.props.initiative,
            type: this.props.type,
            value: 0,
            ruleset:this.props.ruleset,
            statusConditions: [],
            removePlayer: this.props.removePlayer

    }

    healthColorUpdate = (healthPercent) => {
        if(healthPercent <= 25) {
            this.setState(() => {
                return {
                    healthColor: red
                }
            })  
        } else if(healthPercent <= 50) {
            this.setState(() => {
                return {
                    healthColor: yellow
                }
            })
        } else {
            this.setState(() => {
                return {
                    healthColor: green
                }
            })
        }
    }
    

    handleDamagePlayer = (numberChange) => { 
        damageAnimation(this.combatant)
        
        if(this.state.currentHealth > numberChange) {

            this.setState(prevState => {
                return {
                  currentHealth: prevState.currentHealth - numberChange
                  }
              },() => {
                  this.setState(() => {
                      return {
                          healthPercent: (this.state.currentHealth/this.state.maxHealth)*100,
                      }
                  },() => {
                    this.healthColorUpdate(this.state.healthPercent)
                  })
              })
        } else {
            this.setState(() => {
                return {
                currentHealth: 0
                }
            },() =>{
                this.setState(() => {
                    return{
                        healthPercent: 0
                    }
                })
                deathAnimation(this.combatant)
            })  
        }
        
    }

    handleDamageEnemy = (numberChange) => {
        damageAnimation(this.combatant)

        if(this.state.currentHealth > numberChange) {

            this.setState(prevState => {
                return {
                  currentHealth: prevState.currentHealth - numberChange
                  }
              },() => {
                  if((this.state.currentHealth/this.state.maxHealth)*100 <= 25) {
                    this.healthColorUpdate(25)
                    this.setState(() => {
                        return{
                            healthPercent: 25
                        }
                    })
                  } else if((this.state.currentHealth/this.state.maxHealth)*100 <= 50) {
                    this.healthColorUpdate(50)
                    this.setState(() => {
                        return {
                            healthPercent: 50
                        }
                    })
                  } else {
                        this.healthColorUpdate(100)
                      this.setState(() => {
                          return {
                              healthPercent: 100
                          }
                      })
                  }
                })
        } else {
            this.setState(() => {
                return {
                currentHealth: 0
                }
            },() =>{
                this.setState(() => {
                    return{
                        healthPercent: 0
                    }
                })
                deathAnimation(this.combatant)
            })  
        }
    }
      

    handleHealPlayer = (numberChange) => {
        healAnimation(this.combatant)

        if(numberChange <= this.state.maxHealth-this.state.currentHealth) {

            this.setState(prevState => {
                return {
                  currentHealth: prevState.currentHealth + numberChange
                  }
              },() => {
                  this.setState(() => {
                      return {
                          healthPercent: (this.state.currentHealth/this.state.maxHealth)*100,
                      }
                  },() => {
                    this.healthColorUpdate(this.state.healthPercent)
                  })
              })
        } else {
            this.setState(() => {
                return {
                currentHealth: this.state.maxHealth
                }
            },() =>{
                this.setState(() => {
                    return{
                        healthPercent: 100
                    }
                })
            })  
        }
    }

    handleHealEnemy = (numberChange) => { 
        healAnimation(this.combatant)
        
        if(numberChange <= this.state.maxHealth-this.state.currentHealth) {

            this.setState(prevState => {
                return {
                  currentHealth: prevState.currentHealth + numberChange
                  }
              },() => {
                  if((this.state.currentHealth/this.state.maxHealth)*100 <= 25) {
                    this.healthColorUpdate(25)
                    this.setState(() => {
                        return{
                            healthPercent: 25
                        }
                    })
                  } else if((this.state.currentHealth/this.state.maxHealth)*100 <= 50) {
                    this.healthColorUpdate(50)
                    this.setState(() => {
                        return {
                            healthPercent: 50
                        }
                    })
                  } else {
                        this.healthColorUpdate(100)
                      this.setState(() => {
                          return {
                              healthPercent: 100
                          }
                      })
                  }
                })
        } else {
            this.setState(() => {
                return {
                currentHealth: this.state.maxHealth
                }
            },() =>{
                this.setState(() => {
                    return{
                        healthPercent: 100
                    }
                })
            })  
        }
    }

    revealAC = () => {
        this.enemyAC.innerText = this.state.ac
    }

    apply = (status) => {
        console.log(status)
        
        this.setState(prevState => {
            prevState.statusConditions.push(status)
            return {
            }
          })
    }

    handleRemoveStatus = (id) => {
        this.setState( prevState => {
            return {
                statusConditions: prevState.statusConditions.filter( s => s !== id )
            }
        });
      }
    
    render() {
        if(this.state.type == 'player') {
            return (
                <div id={this.props.id} className='combatant player' ref={ ref => this.combatant = ref}>
                    <div className='shadow-wrapper'></div>
                    <div className='animations'>
                        <div className='box'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='death'>
                            <img src={require('../Images/death.png')}></img>
                        </div>
                        <div className='damageEffect'></div> 
                        <div className='healEffect'>
                            <div className='healBackground'></div>
                            <img className='mainHeal h1' src={require('../Images/mainHeal.png')}></img>
                            <img className='mainHeal h2' src={require('../Images/mainHeal.png')}></img>
                            <img className='mainHeal h3' src={require('../Images/mainHeal.png')}></img>
                            <img className='smallHeal h4' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h5' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h6' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h7' src={require('../Images/smallHeal.png')}></img>
                            <img className='transparentHeal h8' src={require('../Images/transparentHeal.png')}></img>
                            <img className='transparentHeal h9' src={require('../Images/transparentHeal.png')}></img>
                            <img className='transparentHeal h10' src={require('../Images/transparentHeal.png')}></img>
                        </div>  
                    </div>
                    
                    <div className='removeWrapper'>
                        <button className='remove' onClick={ () => this.state.removePlayer(this.props.id)}>✖</button>
                    </div>
                        
                    <div className='initWrapper'>
                        <p className='initiative'> {this.state.initiative} </p>
                    </div>
    
                    <div className='acWrapper'>
                        <p className='ac'> {this.state.ac} </p>
                    </div>
    
                    <div className='combatantName'>
                        <h2>{ this.state.combatant }</h2> 
                        <Health
                        maxHealth={this.state.maxHealth}
                        currentHealth={this.state.currentHealth} 
                        healthPercent={this.state.healthPercent} 
                        healthColor={this.state.healthColor}   
                        />
                        <div className='statusEffects'>
                            <div className="statusMenu" >
                                <select name='status' id='status'  ref={ ref => this.selectedStatus = ref}>
                                    {Object.keys(this.props.ruleset).map((item) => (
                                        <option>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
                                    ))}
                                </select>
                                <button className="apply" type='button' onClick={() => this.apply(this.selectedStatus.value)}>Apply</button>
                            </div>
                            {this.state.statusConditions.map((item) => (
                                    <Status 
                                        ruleset = {this.props.ruleset}
                                        removeStatus ={this.handleRemoveStatus}
                                        id={item}
                                        getInfo = {this.props.getInfo}
                                    />
                            ))}
                        </div>
                </div>
    
                    <div className='damageWrapper'>
                        <Damage 
                            value= {this.state.value}
                            type={this.props.type}
                            damage= {this.handleDamagePlayer}
                            heal= {this.handleHealPlayer}
                        />
                    </div>
                </div> 
            
            )
        } else {
            return (
                <div id={this.props.id} className='combatant enemy' ref={ ref => this.combatant = ref}>
                    <div className='shadow-wrapper'></div>
                    <div className='animations'>
                        <div className='box'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='death'>
                            <img src={require('../Images/death.png')}></img>
                        </div>
                        <div className='damageEffect'></div>
                        <div className='healEffect'>
                            <div className='healBackground'></div>
                            <img className='mainHeal h1' src={require('../Images/mainHeal.png')}></img>
                            <img className='mainHeal h2' src={require('../Images/mainHeal.png')}></img>
                            <img className='mainHeal h3' src={require('../Images/mainHeal.png')}></img>
                            <img className='smallHeal h4' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h5' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h6' src={require('../Images/smallHeal.png')}></img>
                            <img className='smallHeal h7' src={require('../Images/smallHeal.png')}></img>
                            <img className='transparentHeal h8' src={require('../Images/transparentHeal.png')}></img>
                            <img className='transparentHeal h9' src={require('../Images/transparentHeal.png')}></img>
                            <img className='transparentHeal h10' src={require('../Images/transparentHeal.png')}></img>
                        </div>   
                    </div>
                    <div className='removeWrapper'>
                    <button className='remove' onClick={ () => this.state.removePlayer(this.props.id)}>✖</button>
                    </div>
                        
                    <div className='initWrapper'>
                        <p className='initiative'> {this.state.initiative} </p>
                    </div>
    
                    <div className='acWrapper ac-reveal' onClick={this.revealAC}>
                        <p className='ac enemy-ac' ref={ref => this.enemyAC = ref}>??</p>
                    </div>
    
                    <div className='combatantName'>
                        <h2>{ this.state.combatant }</h2> 
                        <Health
                        maxHealth='??'
                        currentHealth='??'
                        healthPercent={this.state.healthPercent} 
                        healthColor={this.state.healthColor}   
                        />
                        <div className='statusEffects'>
                            <div className="statusMenu" >
                                <select name='status' id='status'  ref={ ref => this.selectedStatus = ref}>
                                    {Object.keys(this.props.ruleset).map((item) => (
                                        <option>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
                                    ))}
                                </select>
                                <button className="apply" type='button' onClick={() => this.apply(this.selectedStatus.value)}>Apply</button>
                            </div>
                            {this.state.statusConditions.map((item) => (
                                    <Status 
                                        ruleset = {this.props.ruleset}
                                        removeStatus ={this.handleRemoveStatus}
                                        id={item}
                                        getInfo = {this.props.getInfo}
                                    />
                            ))}
                        </div>
                    </div>
    
                    <div className='damageWrapper'>
                        <Damage 
                            value= {0}
                            type={this.props.type}
                            damage= {this.handleDamageEnemy}
                            heal= {this.handleHealEnemy}
                        />
                    </div>
                </div> 
            )
        }
        
    }
}

export default Combatant