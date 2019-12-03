<template>
  <div class="event">
    <header>
      <h1 class="title">
        <span class="title-text">{{ $page.frontmatter.title }}</span>
        <span class="title-hashtag">
          &mdash; Vue HYD #{{ $page.frontmatter.id }}
        </span>
      </h1>
      <h2 class="subtitle">
        Meetup Page -
        <a
          :href="
            `https://www.meetup.com/vue-hyderabad/events/${$page.frontmatter.meetup}`
          "
          target="_blank"
        >
          <small>(RSVP)</small>
        </a>
      </h2>
    </header>

    <main class="agenda">
      <EventGallery :photos="$page.frontmatter.photos" />

      <h2>Agenda</h2>
      <ul class="event-items">
        <li
          class="event-item"
          v-for="(item, index) in $page.frontmatter.agenda"
          :key="index"
        >
          <component :is="use(item.type)" v-bind="item" />
        </li>
      </ul>
    </main>

    <footer>
      <section v-if="date">
        <h2>Details</h2>

        <p><strong>Date:</strong> {{ date.toDateString() }}</p>
        <p><strong>Time:</strong> {{ $page.frontmatter.time }}</p>
        <p>
          <strong>Venue:</strong> {{ $page.frontmatter.venue.name }}
          <a
            v-if="!$page.frontmatter.venue.map.embed"
            :href="$page.frontmatter.venue.map"
            target="_blank"
            rel="noopener noreferrer"
            >(See on Google Map)
          </a>
          <template v-else>
            <div
              class="map-embed"
              v-html="$page.frontmatter.venue.map.embedCode"
            ></div>
          </template>
        </p>
      </section>

      <section v-if="widget">
        <h2>Register</h2>
        <iframe
          :src="widget"
          frameborder="10"
          height="600"
          width="100%"
        ></iframe>
      </section>

      <h2>Sponsors</h2>
      <EventSponsor
        v-for="(item, index) in $page.frontmatter.sponsors"
        :key="item.sponsor"
        v-bind="item"
      />

      <h2>Organizers</h2>
      <EventSpeaker
        organizer
        v-for="(item, index) in $page.frontmatter.organizers"
        :key="item"
        :speaker="item"
      />
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    use(type) {
      switch (type) {
        case "talk":
          return "EventTalk";
        case "show":
          return "EventShow";
        case "tell":
          return "EventTell";
        case "workshop":
          return "EventWorkshop";
        case "Q&A":
          return "EventQuestion";
        default:
          return "EventDefault";
      }
    }
  },
  computed: {
    date() {
      return this.$page.frontmatter.date
        ? new Date(this.$page.frontmatter.date)
        : null;
    },
    widget() {
      return this.$page.frontmatter.townscript
        ? "https://www.townscript.com/widget/" +
            this.$page.frontmatter.townscript
        : null;
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 3rem;
  margin-bottom: 0;
}
.subtitle {
  border-bottom: none;
  margin-top: 1rem;
}
.title-hashtag {
  opacity: 0.75;
  display: inline-block;
  margin-right: 1rem;
}
.event-items {
  padding-left: 0;
}
.event-item {
  margin-bottom: 2rem;
  list-style: none;
}
.event-item::last-child {
  margin-bottom: 0;
}
.map-embed {
  margin-top: 1rem;
  border: 4px solid #bdbdbd;
}
</style>
