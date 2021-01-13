<template lang="pug">
  FullCalendar(:options="calendarOptions" :header="header")    
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import jaLocale from '@fullcalendar/core/locales/ja'

@Component({
  components: {
    FullCalendar,
  },
})
export default class Calendar extends Vue {
  private calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: jaLocale,
    header: {
      left: '',
      center: 'title',
      right: '',
    },
    events: [
      { title: 'event 1', date: '2021-01-01' },
      { title: 'event 2', date: '2021-01-02' },
    ],
  }

  private header = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  }
}
</script>
<style></style>
