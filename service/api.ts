const url = 'http://8.219.148.236';

export function getTasks(){
  return fetch(`${url}/tasks`).then(res => res.json()).then(data => {
    console.log(data);
    return data;
  })
}