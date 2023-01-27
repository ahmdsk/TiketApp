<template>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body text-center">
                    <h5>{{ event.title ?? "" }}</h5>
                    <hr>
                    <small class="d-inline-block pb-3">{{ textPrefix(event.description, 100, '...') }}</small>
                    <span>
                        <h5>Event Date:</h5>
                        <h6 class="pb-3" style="font-size: .8em">{{event.date ?? "-"}}</h6>
                    </span>
                    <router-link :to="{ name: 'events', params: {id: event.id}}" class="btn btn-primary" style="width: 100%">View More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from 'vue'

export default {
    name: 'Event',
    props: {
        event: {
            type: Object,
            default: () => {}
        }
    },
    setup(props) {
        const textPrefix = (text, length, suffix = null) => {
            if(text.length > length) {
                return text.substring(0, length) + suffix
            } else {
                return text
            }
        }

        return {
            textPrefix,
        }
    }
}
</script>