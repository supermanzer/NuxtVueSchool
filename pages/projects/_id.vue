<template>
  <div class="container">
    <article>
      <h1 class="title">{{ project.title }}</h1>
      <p>{{ project.content }}</p>
    </article>
    <aside class="right-sidebar">
      <h3>Other Nifty Projects</h3>
      <ul>
        <li v-for="related in relatedProjects" :key="related.id">
          <nuxt-link
            :to="{ name: 'projects-id', params: { id: related.id } }"
            >{{ related.title }}</nuxt-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    project() {
      return this.$store.state.projects.all.find(
        (project) => project.id === this.id
      )
    },
    relatedProjects() {
      return this.$store.state.projects.all.filter(
        (project) => project.id !== this.id
      )
    },
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        { name: 'twitter:title', content: this.project.title },
        { name: 'twitter:description', content: this.project.content },
        {
          name: 'twitter:image',
          content:
            'https://www.nps.gov/katm/planyourvisit/images/Bear-410-on-the-beach-at-Brooks-Camp_RWW8634-688-px.jpg?maxwidth=650&autorotate=false',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1rem;
}
</style>
