import React from 'react';

export default class extends React.Component {

    render() {
        let eventType = 'activity';
        let eventClass = 'event-type ' + (eventType == 'activity' ? 'event-activity' : 'event-publish'),
            eventName = eventType == 'activity' ? '活动' : '公告',
            eventTitle = '口袋大作战',
            eventContent = '圣诞节活动',
            eventDate = '11-30';
        return (
            <table className="game-info-item">
                <tbody>
                    <tr>
                        <td className="event-type-zone">
                            <div className={eventClass}>{eventName}</div>
                        </td>
                        <td>
                            <div className="event-content">
                                <span>【</span>
                                <span>{eventTitle}</span>
                                <span>】</span>
                                <span>{eventContent}</span>
                            </div>
                        </td>
                        <td className="event-date">{eventDate}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}