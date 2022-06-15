<template>
  <div class="col">
    <q-file
      filled
      v-model="fitxer"
      label="Clica aqui per seleccionar fitxer CSV del STOCK"
      max-files="1"
      dense
    >
      <template v-slot:append>
        <q-icon
          v-if="fitxer !== null"
          name="close"
          @click.stop="fitxer = null"
          class="cursor-pointer"
        />
        <q-icon name="note_add" @click.stop />
      </template>

      <template v-slot:after>
        <q-btn v-if="fitxer != null" dense label="Importar" noCaps color="negative" @click="importar" />
        <q-btn v-if="dInventariStock.length != 0" dense label="Mostrar" noCaps color="green-9" @click="activar = !activar" />
      </template>
    </q-file>

		<pre>
			Registres: {{ dInventariStock.length }}
			<!-- suma UnitatsKARDEX: {{ sumaUnitatsKARDEX }} -->
			</pre>


    <q-dialog
      v-model="activar"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
					<q-table
						title="Inventari STOCK"
						:data="dInventariStock"
						:columns="columns"
						:row-key="row => row.id"
						separator="cell"
						dense
						:pagination.sync="pagination"
						:rows-per-page-options="[0]"
						:filter="filter"
						style="height: 400px"
						virtual-scroll
					>
						<template v-slot:top-right>
							<q-input borderless dense debounce="300" v-model="filter" filled placeholder="buscar">
								<template v-slot:append>
									<q-icon name="search" />
								</template>
							</q-input>
						</template>
					</q-table>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>



  </div>
	
</template>

<script>
export default {

  data() {
    return {
			fitxer: null,
			activar: false,
			filter: null,
      pagination: {
      	rowsPerPage: 0
      },

      columns: [
        {
          name: "nIPEI",
          align: "left",
          label: "IPEI",
          field: "IPEI",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nMODEL",
          align: "left",
          label: "MODEL",
          field: "MODEL",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
        {
          name: "nPROCEDENCIA",
          align: "left",
          label: "Procedencia",
          field: "PROCEDENCIA",
          sortable: true,
          headerClasses: "bg-blue-10 text-white"
        },
			]

		}
	},

	methods:{
    importar: async function() {
      //console.log(this.fitxer.path);

      var arr = [];
      var arrFitxerLlegit = null;

			function readFileAsync(file) {
				return new Promise((resolve, reject) => {
					let reader = new FileReader();

					reader.addEventListener("loadend", function() {
						// reader.result contains the contents of blob as a typed array
						// we insert content of file in DOM here
						resolve(reader.result);
					});					
					
					// reader.onload = () => {
					// 	resolve(reader.result);
					// };
					
					reader.onerror = reject;

					reader.readAsText(file);
				})
			}

			try {
				arrFitxerLlegit = await readFileAsync(this.fitxer)
			} catch (error) {
				console.log("Hi ha hagut error en la lectura del fitxer txt del Farhos: " + error)
			}


			console.log("arrFitxerLlegit")
			console.log(arrFitxerLlegit)

      var lines = arrFitxerLlegit.split("\n");
      for (var index in lines) {
        // valors = array dels valors dels camps que hi ha en una linia
        var linia = lines[index]
				// console.log("LINIA: " + linia)

        // la següent condicio equival a tenir només en compte els registres amb dades (en funcio del primer valor)
				var camps = linia.split(",")
				// if (
        //   camps[0].trim().length != 0 &&
				// 	/#IPEI/g.test(camps[0]) == false &&
				// 	/# USER DATA/g.test(camps[0]) == false
					
        // ) {
					// creacio obejcte
          var obj = {
						IPEI: camps[0].replace(" ",""),
						MODEL: camps[1],
            PROCEDENCIA: camps[2],
          };

          arr.push(obj);
        // }
      }

			this.$store.commit("mDect/mutImportarStock", {arr: arr});

    }		
	},
  computed: {
    dInventariStock: function() {
      return this.$store.state.mDect["arrStock"].map(
        (val, index) => ({ ...val, id: index })
      );
		},
		
  }

}
</script>

<style>



</style>