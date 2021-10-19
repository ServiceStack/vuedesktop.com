<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';
const { Layout } = DefaultTheme
const { page, frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #page-top>
      <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
    </template>
  </Layout>
</template>