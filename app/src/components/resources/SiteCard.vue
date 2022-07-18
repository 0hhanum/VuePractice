<template>
  <li>
    <BaseCard>
      <div>
        <header>
          <h3>{{ siteInfo.title }}</h3>
        </header>
        <nav>
          <a :href="siteInfo.link" target="_blank">Go To Site</a>
        </nav>
      </div>
      <baseButton mode="flat" @click.native="$emit('delete', siteInfo.id)"
        >DELETE</baseButton
      >
    </BaseCard>
  </li>
</template>

<script>
export default {
  name: "SiteCard",
  props: {
    siteInfo: Object,
  },
};
</script>

<style scoped>
li {
  width: 100%;
}
</style>
