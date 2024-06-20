<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar class="custom-toolbar">
        <q-toolbar-title>
          CHECK WEATHER
        </q-toolbar-title>
        <q-btn-dropdown
          class="q-ml-md custom-btn-dropdown"
          label="TUGAS TOMI"
          text-color="white"
        >
          <q-list>
            <q-item clickable v-ripple v-for="i in 7" :key="i" :to="'/tugas' + i">
              <q-item-section>TUGAS {{ i }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.custom-toolbar {
  background-color: #2610cd; /* Change this to your desired color */
}

.custom-btn-dropdown {
  background-color: #a42dfa; /* Change this to your desired color */
}
</style>
