<template>
  <ItemRow
    class="wrapper--event-speaker"
    :class="{ 'wrapper--event-organizer': organizer }"
  >
    <img
      slot="icon"
      :src="'//avatars.io/twitter/' + twitter"
      class="avatar avatar--speaker"
    />
    <div class="speaker-description">
      <a :href="'https://twitter.com/' + twitter" target="_blank">
        {{ name }}
      </a>
      <p class="speaker-bio" v-if="!organizer">
        {{ bio }}
      </p>
    </div>
  </ItemRow>
</template>

<script>
export default {
  props: {
    speaker: {},
    bio: {},
    organizer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    name() {
      return this.speaker.replace(/<[^>]+>/, "");
    },
    twitter() {
      const matches = /<@([^>]+)>/.exec(this.speaker);

      if (matches) return matches[1];
    }
  }
};
</script>

<style scoped>
.wrapper.wrapper--event-speaker {
  display: grid;
  align-items: unset;
  grid-template-columns: 64px 1fr;
  grid-gap: 1rem;
}
.wrapper.wrapper--event-organizer {
  align-items: center !important;
}
.avatar.avatar--speaker {
  height: 64px;
  width: 64px;
}
.speaker-bio {
  margin: 0.5rem 0;
}
</style>
