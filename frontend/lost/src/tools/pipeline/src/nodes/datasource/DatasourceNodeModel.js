import { Observable } from 'pipRoot/l3pfrontend/index'


export default class DatasourceNodeModel {
    constructor(data: any, mode: String) {
		console.log({DatasourceNodeModel: data})
        if(data === undefined || data.peN === undefined){
            throw new Error('data is undefined or has no peN property.')
        }
		this.peN = data.peN
		this.peOut = data.peOut
		this.datasource = data.datasource
		// mapFileTree(data.datasource.fileTree)
        if(mode === 'start'){
            this.state = {
				peN : this.peN,	// USED?
				path : new Observable(''),
				validated : new Observable(false),
			}
        }
		if(mode === 'running'){
            this.id = data.id // USED?
            this.state = new Observable(data.state) // what is data.state?
        }
    }
}

// function mapFileTree(data){
// 	console.log(data)
// 	// extend item
// 	data.text = "hodor was here"
// 	if(!data.nodes){
// 		mapFileTree(data)
// 	}
// 	// go deeper baby
// 	mapFileTree(data.nodes)
// }