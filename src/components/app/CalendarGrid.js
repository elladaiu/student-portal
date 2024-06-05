import { h } from 'vue'

export default {
  created() {},
  data() {
    return {
      weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      hours: {
        start: 8,
        end: 18
      }
    }
  },
  render() {
    const rows = []
    const events = [
      {
        i: 2,
        j: 5
      },
      {
        i: 4,
        j: 2
      },
      {
        i: 6,
        j: 0
      }
    ]
    for (let i = this.hours.start; i <= this.hours.end; i++) {
      rows.push(
        h(
          'div',
          {
            class: 'calendar-grid-hour-container'
          },
          h(
            'div',
            {
              class: 'calendar-grid-hour'
            },
            (i + '').padStart(2, '0') + ':00'
          )
        )
      )
      for (let j = 0; j < 7; j++) {
        if (events.find((e) => e.i + 7 === i && e.j === j)) {
          rows.push(
            h(
              'div',
              {
                class: 'calendar-grid-cell'
              },
              h(
                'div',
                {
                  class: [
                    'calendar-grid-event',
                    ['tw-bg-blue-400', 'tw-bg-red-400', 'tw-bg-violet-400', 'tw-bg-green-400'][
                      Math.floor(Math.random() * 3)
                    ],
                    ['tw-h-16', 'tw-h-20', 'tw-h-24'][Math.floor(Math.random() * 3)]
                  ]
                },
                'Numerical methods - Dr. Ruslan Isaev Lab 3'
              )
            )
          )
        } else {
          rows.push(
            h('div', {
              class: 'calendar-grid-cell'
            })
          )
        }
      }
    }
    return h(
      'div',
      {
        class: 'calendar-grid'
      },
      [
        h('div'),
        ...this.weekdays.map((day) => h('div', { class: 'calendar-grid-day' }, day)),
        ...rows
      ]
    )
  }
}
