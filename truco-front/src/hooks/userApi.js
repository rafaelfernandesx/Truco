import {BASE_API} from './config';

class UserApi {

	//==================== START USER

	async getUsers(JWT) {
		try {
			const req = await fetch(`${BASE_API}/user/fetch`, {
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
			alert('Erro ao buscar usuários');
			return [];
		}
	}

	async deleteUser(JWT, id) {

		try {
			const req = await fetch(`${BASE_API}/user/remove/${id}`, {
				method: 'DELETE',
				headers: {
					'Authorization': "Bearer " + JWT
				}
			});

			const json = await req.json();

			alert(json.message);
			if (json.error !== 0) {
				return false;
			}
			return true;
		} catch (e) {
			alert(e.message);
			return false;
		}

	}

	async editUser(JWT, id) {

		try {
			const req = await fetch(`${BASE_API}/user/fetch/${id}`, {
				method: 'GET',
				headers: {
					'Authorization': "Bearer " + JWT
				}
			});

			const json = await req.json();

			if (json.error !== 0) {
				alert(json.message);
				return false;
			} else {
				return json.data;
			}

		} catch (e) {
			alert('Erro ao editar usuário!');
			console.log(e.message);
			return false;
		}
	}

	async createUser(JWT, userData) {

		try {
			const req = await fetch(`${BASE_API}/user/create`, {
				method: 'POST',
				headers: {
					'Authorization': "Bearer " + JWT
				},
				body: JSON.stringify(userData)
			});

			const json = await req.json();

			if (json.error !== 0) {
				alert(json.message);
				return false;
			}

			return true;
		} catch (e) {
			alert('Erro ao criar usuário!');
			console.log(e.message);
			return false;
		}
	}

	async updateUser(JWT, userData) {

		try {
			const req = await fetch(`${BASE_API}/user/update/${userData.id}`, {
				method: 'PUT',
				headers: {
					'Authorization': "Bearer " + JWT
				},
				body: JSON.stringify(userData)
			});

			const json = await req.json();

			if (json.error !== 0) {
				alert(json.message)
				return false;
			}else{
				alert(json.message)
				return true;
			}

		} catch (e) {
			console.log(e.message);
			alert('Erro ao atualizar usuário!');
			return false;
		}
	}
	//==================== END USER

}

export default UserApi;