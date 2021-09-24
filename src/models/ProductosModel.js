const Mysql = require('../mysql');
const mysql = new Mysql();

class ProductosModel {
	constructor(data={}) {
		this.uid = data.uid ? data.uid : '';
		this.nombre = data.nombre ? data.nombre : '';
	}

	async obtener() {
		const result = await mysql.execute('productos_obtener', []);
		return result;
	}
}

module.exports = ProductosModel;
