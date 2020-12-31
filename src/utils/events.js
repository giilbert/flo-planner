let events = getAllEvents();

function getAllEvents() {
    let data = localStorage.getItem('events')

    if (!data) return [];

    return JSON.parse(data).data
}

/**
 * @param { Object } data
 * @param { string } data.title title of the event
 * @param { string } data.description description of the event
 * @param { number } data.timestamp timestamp of the event
 */
function addEvent(data) {
    events.push(data)
    localStorage.setItem('events', JSON.stringify(
        {
            data: events
        }
    ))
}

window.a = {
    events,
    getAllEvents,
    addEvent
}

export {
    events,
    getAllEvents,
    addEvent
}