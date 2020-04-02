import React from 'react';


const VoteCounter = (props) => {
    return (<div className="row">
        <span className="number">{props.votes}</span>
        <p className="lang-name">{props.langName}</p>
        <button className="btn" onClick={props.voteUp}>VoteUp</button>
    </div>);
}

export default VoteCounter;