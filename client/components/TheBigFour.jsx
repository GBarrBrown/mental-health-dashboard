import React, { Fragment } from 'react'


const TheBigFour = () => {
    return (
        <Fragment>
            <div id="TheBigFour_container">
                <div className="card">
                    <h3>Tactical Breathing</h3>
                    <h5>Rule of 4</h5>
                    <ul>
                        <li>Inhale to count of 4</li>
                        <li>Exhale for count of 4</li>
                        <li>Practice for 4 minutes</li>
                        <li>Breathe gently into the diaphragm</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Flexible Thinking</h3>
                    <h5>First identify thoughts that contribute to stress. What are you telling yourself?</h5>
                    <h5>Challenge thoughts</h5>
                    <ul>
                        <li>Is this thought helping me be resilient?</li>
                        <li>What other ways can I look at this situation?</li>
                        <li>What evidence do I have that this thought is true?</li>
                        <li>What would I say to a friend in this situation?</li>
                    </ul> 
                </div>
                <div className="card">
                    <h3>Optimism</h3>
                    <h5>Good and bad things can occur at the same time - redirect some attention to good things that are happening</h5>
                    <ul>
                        <li>Identify three good things that occurred recently</li>
                        <li>Whay are they important?</li>
                        <li>How can you make these happen more often?</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Healthy Habits</h3>
                    <h5>When you have a healthy lifestyle you can cope with challenges better</h5>
                    <ul>
                        <li>Identify the healthy behaviour you want to implement</li>
                        <li>Identify the barriers to continuing this behaviour</li>
                        <li>Make a plan to overcome those barriers</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default TheBigFour