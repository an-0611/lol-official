import utils from '../utils';

export default ({ $axios }, inject) => {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
    transformResponse: [
      function (data) {
        let resp = data;

        // for prod response is different from dev
        if (typeof data === 'string') {
          resp = JSON.parse(data);
        }
        return utils.camelizeKeys(resp);
      },
    ],
  });

  // Inject to context as $api
  inject('api', api);
};
