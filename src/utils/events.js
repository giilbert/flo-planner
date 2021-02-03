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
 * @param { Object }        data
 * @param { string }        data.title title of the event
 * @param { string }        data.description description of the event
 * @param { number }        data.timestamp timestamp of the event
 * @param { Array<object> } data.tags
 */
function addEvent(data) {
  events.push(data)
  localStorage.setItem('events', JSON.stringify(
    {
      data: events
    }
  ))

  try {
    listeners.forEach(v => v())
  } catch { }
}

/* example:

a.addEvent({
    title: 'title asdf',
    description: 'description blah blah',
    id: 1,
    timestamp: Date.now() + 100000000,
    tags: [
        {
            name: 'blue tag',
            color: 'blue'
        },
        {
            name: 'red tag',
            color: 'red'
        }
    ]
})

 */

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