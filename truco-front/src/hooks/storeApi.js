import { BASE_API } from './config';

class StoreApi {

    async createStore(JWT, data) {

		try {
			const req = await fetch(`${BASE_API}/store/create`, {
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
			alert('Erro ao criar loja!');
			console.log(e.message);
			return false;
		}
	}

    async getStores(JWT) {
        try {
            const req = await fetch(`${BASE_API}/store/fetch`, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + JWT
                }
            });

            const json = await req.json();
			if (json.error !== 0) {
				alert(json.message);
			}
            return json.data;
        } catch (e) {
            console.log(e.message);
            alert('Erro ao buscar lojas');
            return [];
        }
    }

    async editStore(JWT, id) {
        try {
            const req = await fetch(`${BASE_API}/store/fetch/${id}`, {
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
            alert('Erro ao editar loja!');
			console.log(e.message);
			return false;
        }
    }

    async updateStore (JWT, data) {
        try {
            const req = await fetch(`${BASE_API}/store/update/${data.id}`, {
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
			alert('Erro ao atualizar loja!');
			return false;
        }
    }

	async deleteStore(JWT, id) {

		try {
			const req = await fetch(`${BASE_API}/store/remove/${id}`, {
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

export default StoreApi;