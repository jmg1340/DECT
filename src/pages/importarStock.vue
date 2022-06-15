<template>
  <div class="column q-mx-xl">
		<div class="text-h5 q-my-md">Importació dades STOCK</div>

		<q-list bordered separator>
			<q-item>
				<q-item-section>
					<q-item-label class="q-mb-md">1. En el Sheet de INCIDENCIES DECT, copiar en una nova fulla els DECTs que estan lliures. Exportar aquest full a CSV.</q-item-label>
					<q-item-label class="text-center">
						<q-img class=""
							src="~assets/stockDECTs.png"
							width="400px"
							:img-style="{ border: '2px solid black' }"
						/>
					</q-item-label>
				</q-item-section>
			</q-item>
			<q-item>
				
				<q-item-section>
					<q-item-label class="q-mb-md">2. Importar el fitxer CSV</q-item-label>
					<cmp_ImpStock />
				</q-item-section>
			</q-item>

			
		</q-list>
  </div>
</template>

<script>
import cmp_ImpStock from "../components/cmpImportacioStock"
export default {
	components: { cmp_ImpStock}
}
</script>

<style>

</style>