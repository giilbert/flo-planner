/**
 * @type { Array }
 */
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
    
    listeners.forEach(v => {
        v()
    })
}

/**
 * @param { number } id id of the event
 */
function removeEvent(id) {
    let eventIndex = events.findIndex(e => e.id === id);
    if (eventIndex === -1) throw new Error(`event with id ${id} does not exist!`);
    
    events.splice(eventIndex, 1);

    // update in LS
    localStorage.setItem('events', JSON.stringify(
        {
            data: events
        }
    ))
    
    listeners.forEach(v => {
        v()
    })
}


let listeners = [];
function addEventUpdateListener(callback) {
    listeners.push(callback)
}



window.a = {
    events,
    getAllEvents,
    addEvent,
    removeEvent,
    addEventUpdateListener
}

export {
    events,
    getAllEvents,
    addEvent,
    removeEvent,
    addEventUpdateListener
}