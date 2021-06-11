import { BASE_API } from './config';

class ClientApi {
    templateName = 'cliente';

    async create(JWT, data) {

		try {
			const req = await fetch(`${BASE_API}/client/create`, {
				method: 'POST',
				headers: {
					'Authorization': "Bearer " + JWT
				},
				body: JSON.stringify(data)
			});

			const json = await req.json();

            alert(json.message);
			if (json.error !== 0) {
				return false;
			}
            return true;
		} catch (e) {
			alert(`Erro ao criar ${this.templateName}!`);
			console.log(e.message);
			return false;
		}
	}

    async fetch(JWT) {
        try {
            const req = await fetch(`${BASE_API}/client/fetch`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + JWT
                }
            });
            const json = await req.json();

            if (json.error !== 0) {
                if (json.error === 2) { //codigo exemplo pra erro de autenticação inválida
                    window.location.href = '/preload';
                }
				alert(json.error);
			}
            return json.data;
        } catch (e) {
            console.log(e.message);
            alert(`Erro ao buscar ${this.templateName}`);
            return [];
        }
    }

    async edit(JWT, id) {
        try {
            const req = await fetch(`${BASE_API}/client/fetch/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + JWT
                }
            });

            const json = await req.json();
            if (json.error !== 0) {
                alert(json.message);
                return false;
            }
            return json.data;
        } catch (e) {
            alert(`Erro ao editar ${this.templateName}!`);
			console.log(e.message);
			return false;
        }
    }

    async update (JWT, data) {
        try {
            const req = await fetch(`${BASE_API}/client/update/${data.id}`, {
				method: 'PUT',
				headers: {
					'Authorization': "Bearer " + JWT
				},
				body: JSON.stringify(data)
			});
            // const t = await req.text();
            // console.log(t);
			const json = await req.json();

            alert(json.message)
			if (json.error !== 0) {
				return false;
			}
            return true;
        } catch (e) {
            console.log(e.message);
			alert(`Erro ao atualizar ${this.templateName}!`);
			return false;
        }
    }

	async delete(JWT, id) {

		try {
			const req = await fetch(`${BASE_API}/client/remove/${id}`, {
				method: 'DELETE',
				headers: {
					'Authorization': "Bearer " + JWT
				}
			});

			const json = await req.json();

            alert(json.message);
            if(json.error !== 0) {
                return false;
            }
            return true;
		} catch (e) {
			alert(e.message);
			return false;
		}

	}
}

export default ClientApi;