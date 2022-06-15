<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Inventari telèfons DECT
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list bordered separator>
        <q-item-section>
					<q-item-label
						header
						class="text-bold text-black bg-grey-4"
					>
						Opcions
					</q-item-label>

				</q-item-section>
				<q-item to="/spectralink" class="bg-orange-1">
					<q-item-label>Importacio dades servidor Spectralink</q-item-label>
				</q-item>
				<q-item to="/inventariDTIC" class="bg-orange-1">
					<q-item-label>Importacio dades inventari DTIC</q-item-label>
				</q-item>
				<q-item to="/stock" class="bg-orange-1">
					<q-item-label>Importacio dades STOCK</q-item-label>
				</q-item>
				<q-item to="/comparar" class="bg-orange-3">
					<q-item-label>(Spectralink & Stock) vs DTIC</q-item-label>
				</q-item>
     </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
export default {
  name: 'MainLayout',


  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>
