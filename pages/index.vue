<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        C. Ryan Manzer
      </h1>
      <hr />
      <h5>Full stack software developer, data scientist, and oceanographer</h5>
      <div class="links">
        <nuxt-link class="button--green" to="/about">About Me</nuxt-link>
        <nuxt-link
          v-for="project in projects"
          :key="project.id"
          :to="{ name: 'projects-id', params: { id: project.id } }"
          class="button--grey"
          >{{ project.title }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.all
    },
  },
  head() {
    return {
      title: 'Supermanzer Home page',
      meta: [
        { name: 'twitter:title', content: 'Supermanzer Home' },
        { name: 'twitter:content', content: 'The page of the Super Manzer!' },
        {
          name: 'twitter:image',
          content:
            'https://media-exp1.licdn.com/dms/image/C4D03AQHWvliR9pNmJg/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=gP793IJU0Jggj_espey46RfqSxFgeSISJQ4iGMVzebs',
        },
        { name: 'twitter:card', content: 'summary_image_small' },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  justify-content: center;
}
h1,
h5 {
  margin: 2rem 2rem;
  text-align: center;
}
</style>
