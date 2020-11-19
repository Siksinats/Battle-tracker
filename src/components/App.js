import React from 'react';
import Header from './Header'
import Combatant from './Combatant';
import Footer from './Footer';
import StatusBlade from './StatusBlade';
import '../App.css';



class App extends React.Component {

  rules = {
    FiveE:{ 
      blinded:
       ["A blinded creature can’t see and automatically fails any ability check that requires sight.",
        "Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage."],
      charmed: [
        "A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.",
        "The charmer has advantage on any ability check to interact socially with the creature."],
      deafened: [
        "A deafened creature can’t hear and automatically fails any ability check that requires hearing."],
      frightened: [
        "A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.",
        "The creature can’t willingly move closer to the source of its fear."],
      grappled: [
        "A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
        "The condition ends if the Grappler is incapacitated (see the condition).",
        "The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell."],
      incapacitated: [
        "An incapacitated creature can’t take Actions or Reactions."],
      invisible: [
        "An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.",
        "Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage."],
      paralyzed: [
        "A paralyzed creature is incapacitated (see the condition) and can’t move or speak.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack rolls against the creature have advantage.",
        "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."],
      petrified:[
        "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.",
        "The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.",
        "Attack rolls against the creature have advantage.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "The creature has Resistance to all damage.",
        "The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."],
      poisoned:[
       "A poisoned creature has disadvantage on Attack rolls and Ability Checks."],
      prone:[
        "A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.",
        "The creature has disadvantage on Attack rolls.",
        "An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage."],
      restrained:[
        "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.",
        "Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.",
        "The creature has disadvantage on Dexterity Saving Throws."],
      stunned:[
        "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack rolls against the creature have advantage."],
      unconscious:[
        "An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings",
        "The creature drops whatever it’s holding and falls prone.",
        "The creature automatically fails Strength and Dexterity Saving Throws.",
        "Attack rolls against the creature have advantage.",
        "Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
      ]  
          },
    ThreeE:{
      ability_Damaged:['The character has temporarily lost 1 or more ability score points. Lost points return at a rate of 1 per day unless noted otherwise by the condition dealing the damage. A character with Strength 0 falls to the ground and is helpless. A character with Dexterity 0 is paralyzed. A character with Constitution 0 is dead. A character with Intelligence, Wisdom, or Charisma 0 is unconscious. Ability damage is different from penalties to ability scores, which go away when the conditions causing them go away.'],
      ability_Drained:['The character has permanently lost 1 or more ability score points. The character can regain drained points only through magical means. A character with Strength 0 falls to the ground and is helpless. A character with Dexterity 0 is paralyzed. A character with Constitution 0 is dead. A character with Intelligence, Wisdom, or Charisma 0 is unconscious.'],
      blinded:['The character cannot see. He takes a -2 penalty to Armor Class, loses his Dexterity bonus to AC (if any), moves at half speed, and takes a -4 penalty on Search checks and on most Strength- and Dexterity-based skill checks. All checks and activities that rely on vision (such as reading and Spot checks) automatically fail. All opponents are considered to have total concealment (50% miss chance) to the blinded character. Characters who remain blinded for a long time grow accustomed to these drawbacks and can overcome some of them.'],
      blownAway: [
        "Depending on its size, a creature can be blown away by winds of high velocity. A creature on the ground that is blown away is knocked down and rolls 1d4 × 10 feet, taking 1d4 points of nonlethal damage per 10 feet. A flying creature that is blown away is blown back 2d6 × 10 feet and takes 2d6 points of nonlethal damage due to battering and buffering."],
      checked:['Prevented from achieving forward motion by an applied force, such as wind. Checked creatures on the ground merely stop. Checked flying creatures move back a distance specified in the description of the effect.'],
      confused:['A confused character’s actions are determined by rolling d% at the beginning of his turn: 01-10, attack caster with melee or ranged weapons (or close with caster if attacking is not possible); 11-20, act normally; 21-50, do nothing but babble incoherently; 51-70, flee away from caster at top possible speed; 71-100, attack nearest creature (for this purpose, a familiar counts as part of the subject’s self). A confused character who can’t carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused character. Any confused character who is attacked automatically attacks its attackers on its next turn, as long as it is still confused when its turn comes. A confused character does not make attacks of opportunity against any creature that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked).'],
      cowering:['The character is frozen in fear and can take no actions. A cowering character takes a -2 penalty to Armor Class and loses her Dexterity bonus (if any).'],
      dazed:['The creature is unable to act normally. A dazed creature can take no actions, but has no penalty to AC.',
      'A dazed condition typically lasts 1 round.'],
      dazzled:['The creature is unable to see well because of overstimulation of the eyes. A dazzled creature takes a -1 penalty on attack rolls, Search checks, and Spot checks.'],
      dead:['The character’s hit points are reduced to -10, his Constitution drops to 0, or he is killed outright by a spell or effect. The character’s soul leaves his body. Dead characters cannot benefit from normal or magical healing, but they can be restored to life via magic. A dead body decays normally unless magically preserved, but magic that restores a dead character to life also restores the body either to full health or to its condition at the time of death (depending on the spell or device). Either way, resurrected characters need not worry about rigor mortis, decomposition, and other conditions that affect dead bodies.'],
      deafened:['A deafened character cannot hear. She takes a -4 penalty on initiative checks, automatically fails Listen checks, and has a 20% chance of spell failure when casting spells with verbal components. Characters who remain deafened for a long time grow accustomed to these drawbacks and can overcome some of them.'],
      disabled:['A character with 0 hit points, or one who has negative hit points but has become stable and conscious, is disabled. A disabled character may take a single move action or standard action each round (but not both, nor can she take full-round actions). She moves at half speed. Taking move actions doesn’t risk further injury, but performing any standard action (or any other action the game master deems strenuous, including some free actions such as casting a quickened spell) deals 1 point of damage after the completion of the act. Unless the action increased the disabled character’s hit points, she is now in negative hit points and dying.',
      'A disabled character with negative hit points recovers hit points naturally if she is being helped. Otherwise, each day she has a 10% chance to start recovering hit points naturally (starting with that day); otherwise, she loses 1 hit point. Once an unaided character starts recovering hit points naturally, she is no longer in danger of losing hit points (even if her current hit points are negative).'],
      dying:['A dying character is unconscious and near death. She has -1 to -9 current hit points. A dying character can take no actions and is unconscious. At the end of each round (starting with the round in which the character dropped below 0 hit points), the character rolls d% to see whether she becomes stable. She has a 10% chance to become stable. If she does not, she loses 1 hit point. If a dying character reaches -10 hit points, she is dead.'],
      energy_Drained:['The character gains one or more negative levels, which might permanently drain the character’s levels. If the subject has at least as many negative levels as Hit Dice, he dies. Each negative level gives a creature the following penalties: -1 penalty on attack rolls, saving throws, skill checks, ability checks; loss of 5 hit points; and -1 to effective level (for determining the power, duration, DC, and other details of spells or special abilities). In addition, a spellcaster loses one spell or spell slot from the highest spell level castable.'],
      entangled:['The character is ensnared. Being entangled impedes movement, but does not entirely prevent it unless the bonds are anchored to an immobile object or tethered by an opposing force. An entangled creature moves at half speed, cannot run or charge, and takes a -2 penalty on all attack rolls and a -4 penalty to Dexterity. An entangled character who attempts to cast a spell must make a Concentration check (DC 15 + the spell’s level) or lose the spell.'],
      exhausted:['An exhausted character moves at half speed and takes a -6 penalty to Strength and Dexterity. After 1 hour of complete rest, an exhausted character becomes fatigued. A fatigued character becomes exhausted by doing something else that would normally cause fatigue.'],
      fascinated:['A fascinated creature is entranced by a supernatural or spell effect. The creature stands or sits quietly, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. It takes a -4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat, such as a hostile creature approaching, allows the fascinated creature a new saving throw against the fascinating effect. Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the fascinated creature, automatically breaks the effect. A fascinated creature’s ally may shake it free of the spell as a standard action.'],
      fatigued:['A fatigued character can neither run nor charge and takes a -2 penalty to Strength and Dexterity. Doing anything that would normally cause fatigue causes the fatigued character to become exhausted. After 8 hours of complete rest, fatigued characters are no longer fatigued.'],
      flat_Footed:['A character who has not yet acted during a combat is flat-footed, not yet reacting normally to the situation. A flat-footed character loses his Dexterity bonus to AC (if any) and cannot make attacks of opportunity.'],
      frightened:['A frightened creature flees from the source of its fear as best it can. If unable to flee, it may fight. A frightened creature takes a -2 penalty on all attack rolls, saving throws, skill checks, and ability checks. A frightened creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.',
      'Frightened is like shaken, except that the creature must flee if possible. Panicked is a more extreme state of fear.'],
      grappled:['Engaged in wrestling or some other form of hand-to-hand struggle with one or more attackers. A grappling character can undertake only a limited number of actions. He does not threaten any squares, and loses his Dexterity bonus to AC (if any) against opponents he isn’t grappling. See Grapple.'],
      helpless:['A helpless character is paralyzed, held, bound, sleeping, unconscious, or otherwise completely at an opponent’s mercy. A helpless target is treated as having a Dexterity of 0 (-5 modifier). Melee attacks against a helpless target get a +4 bonus (equivalent to attacking a prone target). Ranged attacks gets no special bonus against helpless targets. Rogues can sneak attack helpless targets.',
      'As a full-round action, an enemy can use a melee weapon to deliver a coup de grace to a helpless foe. An enemy can also use a bow or crossbow, provided he is adjacent to the target. The attacker automatically hits and scores a critical hit. (A rogue also gets her sneak attack damage bonus against a helpless foe when delivering a coup de grace.) If the defender survives, he must make a Fortitude save (DC 10 + damage dealt) or die.',
      'Delivering a coup de grace provokes attacks of opportunity.',
      'Creatures that are immune to critical hits do not take critical damage, nor do they need to make Fortitude saves to avoid being killed by a coup de grace.'],
      incorporeal:['Having no physical body. Incorporeal creatures are immune to all nonmagical attack forms. They can be harmed only by other incorporeal creatures, +1 or better magic weapons, spells, spell-like effects, or supernatural effects.'],
      invisible:['Visually undetectable. An invisible creature gains a +2 bonus on attack rolls against sighted opponents, and ignores its opponents’ Dexterity bonuses to AC (if any). (See Invisibility, under Special Abilities.'],
      knocked_Down:['Depending on their size, creatures can be knocked down by winds of high velocity. Creatures on the ground are knocked prone by the force of the wind. Flying creatures are instead blown back 1d6 × 10 feet.'],
      nauseated:['Experiencing stomach distress. Nauseated creatures are unable to attack, cast spells, concentrate on spells, or do anything else requiring attention. The only action such a character can take is a single move action per turn.'],
      panicked:['A panicked creature must drop anything it holds and flee at top speed from the source of its fear, as well as any other dangers it encounters, along a random path. It can’t take any other actions. In addition, the creature takes a -2 penalty on all saving throws, skill checks, and ability checks. If cornered, a panicked creature cowers. A panicked creature can use special abilities, including spells, to flee; indeed, the creature must use such means if they are the only way to escape.',
      'Panicked is a more extreme state of fear than shaken or frightened.'],
      paralyzed:['A paralyzed character is frozen in place and unable to move or act. A paralyzed character has effective Dexterity and Strength scores of 0 and is helpless, but can take purely mental actions. A winged creature flying in the air at the time that it becomes paralyzed cannot flap its wings and falls. A paralyzed swimmer can’t swim and may drown. A creature can move through a space occupied by a paralyzed creature—ally or not. Each square occupied by a paralyzed creature, however, counts as 2 squares.'],
      petrified:['A petrified character has been turned to stone and is considered unconscious. If a petrified character cracks or breaks, but the broken pieces are joined with the body as he returns to flesh, he is unharmed. If the character’s petrified body is incomplete when it returns to flesh, the body is likewise incomplete and there is some amount of permanent hit point loss and/or debilitation.'],
      pinned:['Held immobile (but not helpless) in a grapple.'],
      prone:['The character is on the ground. An attacker who is prone has a -4 penalty on melee attack rolls and cannot use a ranged weapon (except for a crossbow). A defender who is prone gains a +4 bonus to Armor Class against ranged attacks, but takes a -4 penalty to AC against melee attacks.',
      'Standing up is a move-equivalent action that provokes an attack of opportunity.'],
      shaken:['A shaken character takes a -2 penalty on attack rolls, saving throws, skill checks, and ability checks.',
      'Shaken is a less severe state of fear than frightened or panicked.'],
      sickened:['The character takes a -2 penalty on all attack rolls, weapon damage rolls, saving throws, skill checks, and ability checks.'],
      stable:['A character who was dying but who has stopped losing hit points and still has negative hit points is stable. The character is no longer dying, but is still unconscious. If the character has become stable because of aid from another character (such as a Heal check or magical healing), then the character no longer loses hit points. He has a 10% chance each hour of becoming conscious and disabled (even though his hit points are still negative).',
      'If the character became stable on his own and hasn’t had help, he is still at risk of losing hit points. Each hour, he has a 10% chance of becoming conscious and disabled. Otherwise he loses 1 hit point.'],
      staggered:['A character whose nonlethal damage exactly equals his current hit points is staggered. A staggered character may take a single move action or standard action each round (but not both, nor can she take full-round actions).',
      'A character whose current hit points exceed his nonlethal damage is no longer staggered; a character whose nonlethal damage exceeds his hit points becomes unconscious.'],
      stunned:['A stunned creature drops everything held, can’t take actions, takes a -2 penalty to AC, and loses his Dexterity bonus to AC (if any).'],
      turned:['Affected by a turn undead attempt. Turned undead flee for 10 rounds (1 minute) by the best and fastest means available to them. If they cannot flee, they cower.'],
      unconscious:['Knocked out and helpless. Unconsciousness can result from having current hit points between -1 and -9, or from nonlethal damage in excess of current hit points.']
      }
  }
  state ={
    players: [],
    id:0,
    combat: false,
    ruleset: this.rules.FiveE,
    statusName: '',
    statusInfo: []
}



handleRemovePlayer = (id) => {
  this.setState( prevState => {
      return {
          players: prevState.players.filter( p => p.id !== id )
      }
     
  });
}



  handleAddPlayer = () => {
    let addName = prompt('Player Name:')
    let addInit = prompt('Initiative:')
    let addHealth = prompt('Max HP:')
    let addAC = prompt('Armor Class:')
    this.setState(prevState => {
      let newPlayer = {
        name: addName,
        initiative: Number(addInit),
        maxHealth: addHealth,
        ac: addAC,
        id: prevState.id,
        type: 'player'
        }
      this.state.id = prevState.id + 1
      prevState.players.push(newPlayer)
      return {
        players: this.state.players.sort((a, b) => (b.initiative - a.initiative))
      }
    },() => {
      //console.log(this.state.players)
    })
  }

  handleAddEnemy = () => {
    let addName = prompt('Player Name:')
    let addInit = prompt('Initiative:')
    let addHealth = prompt('Max HP:')
    let addAC = prompt('Armor Class:')
    this.setState(prevState => {
      let newPlayer = {
        name: addName,
        initiative: Number(addInit),
        maxHealth: addHealth,
        ac: addAC,
        id: prevState.id,
        type: 'enemy'
        }
      this.state.id = prevState.id + 1
      prevState.players.push(newPlayer)
      return {
        players: this.state.players.sort((a, b) => (b.initiative - a.initiative))
      }
    },() => {
      //console.log(this.state.players)
    })
  }

  handleStart = (ruleset) => {
    if(this.state.players.length == 0) {
      alert('Please add combatants before starting combat')
    } else {
      this.setState({
          combat: true,
          ruleset: this.rules[ruleset]
        })
        let fighterList = this.state.players
        let firstFighter = fighterList[0]
        
        this.highlightPlayer(fighterList, firstFighter)
      }
    }
  

  handleNext = () => {
    let fighterList = this.state.players
    let fighterCards = document.getElementsByClassName('combatant')
    let oldCurrentFighter = document.getElementsByClassName('currentTurn')[0]
    console.log(oldCurrentFighter)
    let newCurrentFighter = document.getElementsByClassName('nextTurn')[0]
    let firstFighter = document.getElementsByClassName('combatant')[0]
    let lastFighter = document.getElementsByClassName('combatant')[fighterList.length-1]

    if(this.evaluateCurrent(fighterCards).includes(true) !== true && 
      this.evaluateNext(fighterCards).includes(true) == true) {
        if(newCurrentFighter == lastFighter && fighterCards.length == 1){
          firstFighter.classList.add('currentTurn')
          firstFighter.classList.remove('nextTurn')
        } else if(newCurrentFighter == lastFighter && fighterCards.length == 2){
          newCurrentFighter.classList.toggle('nextTurn')
          newCurrentFighter.classList.toggle('currentTurn')
          
          firstFighter.classList.add('nextTurn')
        } else {
          newCurrentFighter.classList.toggle('nextTurn')
          newCurrentFighter.classList.toggle('currentTurn')

          newCurrentFighter.nextElementSibling.classList.toggle('nextTurn')
        }
      

    } else if (this.evaluateCurrent(fighterCards).includes(true) == true && 
      this.evaluateNext(fighterCards).includes(true) !== true) {
        if(oldCurrentFighter == lastFighter && fighterCards.length == 1){
          return
        }else if(oldCurrentFighter == lastFighter && fighterCards.length == 2) {
          document.getElementsByClassName('currentTurn')[0].classList.toggle('currentTurn')

          fighterCards[0].classList.add('currentTurn')
          fighterCards[1].classList.add('nextTurn')
        } else {
          oldCurrentFighter.nextElementSibling.classList.toggle('currentTurn')

          oldCurrentFighter.classList.toggle('currentTurn')
          oldCurrentFighter.classList.toggle('nextTurn')
        }
        


    } else if (this.evaluateCurrent(fighterCards).includes(true) !== true && 
    this.evaluateNext(fighterCards).includes(true) !== true ) {
      
      this.highlightPlayer(fighterList, fighterList[0])

    } else {
        if(lastFighter.classList.contains('nextTurn') == true) {

          oldCurrentFighter.classList.toggle('currentTurn');
    
          newCurrentFighter.classList.toggle('nextTurn')
          newCurrentFighter.classList.toggle('currentTurn')
    
          firstFighter.classList.toggle('nextTurn')
    
        } else {
          let nextFighter = newCurrentFighter.nextElementSibling

          oldCurrentFighter.classList.toggle('currentTurn');
      
          newCurrentFighter.classList.toggle('nextTurn')
          newCurrentFighter.classList.toggle('currentTurn')
      
          nextFighter.classList.toggle('nextTurn')
        }
    }
    document.getElementsByClassName('currentTurn')[0].scrollIntoView({behavior: 'smooth'})
  }

  highlightPlayer = (fighterList, currentFighter) => {
    let currentid = currentFighter.id
    let onDeckIndex = fighterList.indexOf(currentFighter)+1
    

    if(this.state.players.length == 1) {
      document.getElementById(currentid).classList.toggle('currentTurn')
      } else if(onDeckIndex > this.state.players.length && currentid !== 1){
        document.getElementById(currentid).classList.toggle('currentTurn')
        document.getElementById('1').classList.toggle('nextTurn')
      } else{
        let onDeckid = fighterList[fighterList.indexOf(currentFighter)+1].id
        document.getElementById(currentid).classList.toggle('currentTurn')
        document.getElementById(onDeckid).classList.toggle('nextTurn')
      } {
    } 
  }

  evaluateNext = (arr) => {
    let nextTurn=[]
    for(let i=0; i<arr.length; i++){
      nextTurn.push(arr[i].classList.contains('nextTurn'))
    }
    return nextTurn;
  }

  evaluateCurrent = (arr) => {
    let currentTurn=[]
    for(let i=0; i<arr.length; i++){
      currentTurn.push(arr[i].classList.contains('currentTurn'))
    }
    return currentTurn;
  }

  handleGetInfo = (statusID, statusArr) => {
    document.getElementsByClassName('status-wrapper')[0].classList.add('height')
    this.setState(() => {
      return{
        statusName: statusID,
        statusInfo: statusArr
    }
    })
  }






  render () {
    return (
      <div className="tracker">
        <Header combatants = {this.state.players.length}
                combat={this.state.combat}
                start = {this.handleStart}
                next = {this.handleNext} />

        { this.state.players.map( combatant =>
          <Combatant 
          combatant={combatant.name}
          initiative={combatant.initiative}
          maxHealth={Number(combatant.maxHealth)}
          currentHealth={Number(combatant.maxHealth)}
          ac={combatant.ac}
          type={combatant.type}
          ruleset={this.state.ruleset}
          id={combatant.id}
          key={combatant.id.toString()}
          removePlayer={this.handleRemovePlayer}
          getInfo = {this.handleGetInfo} />
        )}

        <Footer
          addPlayer = {this.handleAddPlayer}
          addEnemy = {this.handleAddEnemy} />

        <StatusBlade
          statusName = {this.state.statusName}
          statusInfo = {this.state.statusInfo} />
      
      </div>
    )
  }
}

export default App;
