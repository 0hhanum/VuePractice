<template>
  <li>
    <BaseCard>
      <div id="content-container">
        <div>
          <header>
            <h3>{{ siteInfo.title }}</h3>
          </header>
        </div>
        <div>
          <nav>
            <a href>Go To Site</a>
          </nav>
          <button>DELETE</button>
        </div>
      </div>
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
  width: 80%;
}
#content-container {
  padding: 20px;
  background-color: rgba(23, 100, 100, 0.576);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
}
</style>
