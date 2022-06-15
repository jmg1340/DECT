<template>
  <div class="column q-mx-xl">
		<div class="text-h5 q-my-md">Importació dades INVENTARI DTIC</div>

		<q-list bordered separator>
			<q-item>
				<q-item-section>
					<q-item-label class="q-mb-md">1. Des del Notes copiar i pegar a un bloc de Notes</q-item-label>
					<q-item-label class="text-center">
						<q-img class=""
							src="~assets/img_ExportarInventariDTIC.png"
							width="600px"
							:img-style="{ border: '2px solid black' }"
						/>
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-item>
				
				<q-item-section>
					<q-item-label class="q-mb-md">2. Importar el fitxer TXT</q-item-label>
					<cmp_ImpDTIC />
				</q-item-section>
			</q-item>

			
		</q-list>
  </div>
</template>

<script>
import cmp_ImpDTIC from "../components/cmpImportacioInventariDTIC"
export default {
	components: { cmp_ImpDTIC}
}
</script>

<style>

</style>