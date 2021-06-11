import { BASE_API } from './config';

class UtilApi {

    async fetchGroupPermissions(JWT) {
        try {
            const req = await fetch(`${BASE_API}/group_permission/fetch`, {
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
            alert(e.message);
            return [];
        }
    }

}

export default UtilApi;