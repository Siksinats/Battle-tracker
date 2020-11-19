import React from 'react'; 

class Status extends React.Component {
    state = {
            
            }

    

    render() {
        return (
            <div className='afflictedStatus'>
                <figure tabindex="-1">
                        <img src= {require(`../../public/publicImages/statusEffects/${this.props.id}.png`)} title={`${this.props.id}`}></img>
                            <nav class="statusDropdown">
                                <ul>
                                    <li>
                                        <button onClick={() => this.props.getInfo(this.props.id, this.props.ruleset[this.props.id.toLowerCase()])} >{`${this.props.id} Info`}</button>
                                    </li>
                                    <li>
                                        <button onClick={() => this.props.removeStatus(this.props.id)}>Delete Status</button>
                                    </li>
                                </ul>
                            </nav>
                    </figure>
            </div>
            
        )
    }
}

export default Status