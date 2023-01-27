import EventRepository from "./EventRepository"

const repository = {
    events: EventRepository
}

export default {
    get: (name) => repository[name]
}