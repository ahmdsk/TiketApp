import AuthRepository from "./AuthRepository"
import EventRepository from "./EventRepository"

const repository = {
    events: EventRepository,
    auth: AuthRepository
}

export default {
    get: (name) => repository[name]
}