<template>
	<div class="column q-pa-md">


    <q-list bordered class="rounded-border">
      <q-expansion-item
        expand-separator
        icon="list"
        label="SPECTRALINK - DTIC"
				header-class="bg-negative text-white"
				class="q-mb-xs"
      >
        <q-card>
          <q-card-section>
						<cmpSPCT_DTIC />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="list"
        label="STOCK - DTIC"
				header-class="bg-negative text-white"
				class="q-mb-xs"
      >
        <q-card>
          <q-card-section>
						<cmpStock_DTIC />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="list"
        label="DTIC - Spectralink"
				header-class="bg-negative text-white"
      >
        <q-card>
          <q-card-section>
						<cmpDTIC_Spectralink />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>






	</div>
</template>

<script>
import cmpSPCT_DTIC from "../components/cmpComparativaSpectralink_DTIC"
import cmpStock_DTIC from "../components/cmpComparativaStock_DTIC"
import cmpDTIC_Spectralink from "../components/cmpComparativaDTIC_Spectralink"
export default {
	components: {
		cmpSPCT_DTIC,
		cmpStock_DTIC,
		cmpDTIC_Spectralink
	},

}
</script>

<style>

</style>