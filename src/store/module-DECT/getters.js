export function arrSpectralink_DTIC ( state ) {
	var arrDTIC = JSON.parse(JSON.stringify(state.arrInventariDTIC)) // [{PUESTO: "", DENPUESTO: "", NS: "", DOSIER: "", DESIGNACION: ""}]

	var arrSPCTRLNK = JSON.parse(JSON.stringify( state.arrSpectralink ))  // [{ IPEI: "", NAME: "", STANDBYTEXT: "", SIPUSERNAME: ""}]

	let arrSI = []
	let arrNO = []

	const arr = arrSPCTRLNK.map( function (elemSPCT, index ){
		
		var resultat = arrDTIC.some( function( elDTIC ){
			return elemSPCT.IPEI == elDTIC.NS
		})

		if (resultat) {
			// array d'elements de spectralink que SI existeixen a DTIC
			elemSPCT.DTIC = true
		} else {
			// array d'elements de spectralink que NO existeixen a DTIC
			elemSPCT.DTIC = false
		}

		return elemSPCT
	})

	return arr
}

export function arrDTIC_Spectralink ( state ) {
	var arrDTIC = JSON.parse(JSON.stringify(state.arrInventariDTIC)) // [{PUESTO: "", DENPUESTO: "", NS: "", DOSIER: "", DESIGNACION: ""}]

	var arrSPCTRLNK = JSON.parse(JSON.stringify( state.arrSpectralink ))  // [{ IPEI: "", NAME: "", STANDBYTEXT: "", SIPUSERNAME: ""}]

	const arr = arrDTIC.map( function (elDTIC, index ){
		
		var resultat = arrSPCTRLNK.find( function( elemSPCT ){
			return elemSPCT.IPEI == elDTIC.NS
		})

		if (resultat) {
			// array d'elements de spectralink que SI existeixen a DTIC
			elDTIC.SPCT = true
			elDTIC.NAME = resultat.NAME
			elDTIC.STANDBYTEXT = resultat.STANDBYTEXT
			elDTIC.SIPUSERNAME = resultat.SIPUSERNAME
		} else {
			// array d'elements de spectralink que NO existeixen a DTIC
			elDTIC.SPCT = false
			elDTIC.NAME = null
			elDTIC.STANDBYTEXT = null
			elDTIC.SIPUSERNAME = null

		}

		return elDTIC
	})

	return arr
}


export function arrStock_DTIC ( state ) {
	var arrDTIC = JSON.parse(JSON.stringify(state.arrInventariDTIC)) // [{PUESTO: "", DENPUESTO: "", NS: "", DOSIER: "", DESIGNACION: ""}]

	var arrSTCK = JSON.parse(JSON.stringify( state.arrStock ))  // [{ IPEI: "", MODEL: "", PROCEDENCIA: "" }]

	let arrSI = []
	let arrNO = []

	const arr = arrSTCK.map( function (elemSTCK, index ){
		
		var resultat = arrDTIC.some( function( elDTIC ){
			return elemSTCK.IPEI == elDTIC.NS
		})

		if (resultat) {
			// array d'elements de spectralink que SI existeixen a DTIC
			elemSTCK.DTIC = true
		} else {
			// array d'elements de spectralink que NO existeixen a DTIC
			elemSTCK.DTIC = false
		}

		return elemSTCK
	})

	return arr
}


