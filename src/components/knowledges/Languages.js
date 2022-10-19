import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "javascript", xp:1.2},
            {id: 2, value: "PHP", xp:1.2},
            {id: 3, value: "SQL", xp:1},
            {id: 4, value: "CSS", xp:2},
            
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.5},
            {id: 2, value: "Symfony", xp:1.2},
            {id: 3, value: "Bootstrap", xp:1.2},
            {id: 4, value: "Tailwind", xp:0.7},
        ]

    }
    render() {
        let {languages, frameworks} = this.state;
        
        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothèques"
                className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;