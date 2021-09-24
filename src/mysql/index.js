const mysql 	= require('mysql2/promise');
// const config	= require('../config');

class Mysql {
	constructor() {
		this.connection;
	}

	async init() {
		const connection = await mysql.createConnection({
			host     : '',
			user     : '',
			password : '',
			database : ''
		});
		this.connection = connection;
	}

	async query(query, values) {
		try {
			await this.init();

			const [rows, fields] = await this.connection.query(query, values);

			this.connection.end();

			return rows;
		} catch(error) {
			throw error;
		}
	}

	async execute(store, values) {
		let params = '';

		if (Array.isArray(values)); {
			for(let index in values) {
				if (index > 0)
					params = params + ',?';
				else
					params = params + '?';
			}
		}

		try {
			await this.init();

			const [rows, fields] = await this.connection.execute(`CALL ${store} (${params})`, values);

			this.connection.end();

			return rows[0] || rows.affectedRows;
		} catch(error) {
			throw error;
		}
	}
}

module.exports = Mysql;
