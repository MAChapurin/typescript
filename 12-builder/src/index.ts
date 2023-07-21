type MethodsHTTP = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface Setting {
  method?: MethodsHTTP;
  headers?: Record<string, any>;
  body?: string;
}

interface RequestBuilder {
  url: string;
  setting: Setting;
  exec(): Promise<any>;
}

class MyRequest implements RequestBuilder {
  url: string;
  setting: Setting = {};
  constructor(url: string) {
    this.url = url;
  }

  setMethod(method: MethodsHTTP) {
    this.setting.method = method;
    return this;
  }

  setHeaders(headersObj: Record<string, string>) {
    this.setting.headers = headersObj;
    return this;
  }

  setBody(data: any) {
    this.setting.body = JSON.stringify(data);
    return this;
  }

  exec() {
    return fetch(this.url, this.setting);
  }
}

new MyRequest('https://jsonplaceholder.typicode.com/todos/1')
  .exec()
  .then((response: { json: () => any }) => response.json())
  .then((json: any) => console.log(json));

new MyRequest('https://jsonplaceholder.typicode.com/posts')
  .setMethod('POST')
  .setHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  })
  .setBody({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .exec()
  .then((response) => response.json())
  .then((json) => console.log(json));

new MyRequest('https://jsonplaceholder.typicode.com/posts/1')
  .setMethod('PUT')
  .setHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  })
  .setBody({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .exec()
  .then((response: { json: () => any }) => response.json())
  .then((json: any) => console.log(json));

new MyRequest('https://jsonplaceholder.typicode.com/posts/1')
  .setMethod('DELETE')
  .exec();


