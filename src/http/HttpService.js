const root = 'http://localhost:8080';

class HttpService {

  get(url) {
    return fetch(root + url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  post(url, content) {
    return fetch(root + url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
  }
  
  put(url, content) {
    return fetch(root + url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });
  }

  delete(url) {
    return fetch(root + url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

const handleResponse = response => {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    }
    if (response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(json);
  });
};

export {
  HttpService,
  handleResponse
}