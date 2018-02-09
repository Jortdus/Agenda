import React from 'react';
import Day from './day';

/**
 * Agenda component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="agenda">
                <Day
                    day="Monday"

                />
                <Day
                    day="Tuesday"
                />
                <Day
                    day="Wednesday"
                />
                <Day
                    day="Thursday"
                />
                <Day
                    day="Friday"
                />
                <Day
                    day="Saturday"
                />
                <Day
                    day="Sunday"
                />

            </div>

        );
    }

}

export default Agenda;
