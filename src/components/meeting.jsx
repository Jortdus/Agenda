import React from 'react';

/**
 * Agenda component
 * @param props
 * @returns {XML}
 */
class Meeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const time = 24;
        const styles = {
            left: time * 7,
            top: 5
        };
        return (
            <div
                className="meeting"
                style={styles}
            >
                Meeting
            </div>

        );
    }

}

export default Meeting;
