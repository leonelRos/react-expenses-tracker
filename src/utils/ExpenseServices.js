import tokenService from './tokenService';

const BASE_URL = '/api/expenses/';

export default {
  index,
  create,
  getAll,
  update,
  delete: deleteOne,
};

function index() {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    };
    return fetch(BASE_URL, options).then(res => res.json());
  }

function create(expense) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(expense)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

  function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }
  
  function update(exp) {
    debugger;
    return fetch(`${BASE_URL}/${exp.id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(exp)
    }).then(res => res.json());
  }
  
  function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }