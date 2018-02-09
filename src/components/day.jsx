import React from 'react';
import Meeting from './meeting'
import Reminder from './reminder'

/**
 * Agenda component
 * @param props
 * @returns {XML}
 */
class Day extends React.Component {

    constructor(props) {
        super(props);
    }

    render()
    {
        const hours = [];
        for(let i = 0 ; i < 24 ; i++){
            hours.push(i+1);
        }

        return (
            <div className="day">
                <div className="daytime">
                <div className="title">
                    {this.props.day}

                </div>
                <div className="time">
                    {hours.map(hour => (
                        <p>{hour}:00</p>
                    ))}
                </div>
                </div>

                <Meeting
                    />
                <Reminder
                    />
            </div>

        );
    }

}

export default Day;
