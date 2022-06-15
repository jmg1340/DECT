<template>
  <div class="column q-mx-xl">
		<div class="text-h5 q-my-md">Importació dades SPECTRALINK</div>

		<q-list bordered separator>
			<q-item>
				<q-item-section>
					<q-item-label class="q-mb-md">1. Anar a pagina del servidor Spectralink i fer exportació</q-item-label>
					<q-item-label class="text-center">
						<q-img class=""
							src="~assets/img_Exportar.png"
							width="600px"
							:img-style="{ border: '2px solid black' }"
						/>
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-item>
				
				<q-item-section>
					<q-item-label class="q-mb-md">2. Importar el fitxer CSV</q-item-label>
					<cmp_ImpSpectralink />
				</q-item-section>
			</q-item>

			
		</q-list>
  </div>
</template>

<script>
import cmp_ImpSpectralink from "../components/cmpImportacioSpectralink"
export default {
	components: { cmp_ImpSpectralink}
}
</script>

<style>

</style>