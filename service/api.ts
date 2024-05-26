const url = 'http://8.219.148.236';

export type Task = {
  id: number;
  name: string;
  description: string;
  active: true;
  total_amount: number;
  condition: string;
  user_scores: {
    user1: number;
    user2: number;
  };
  icon: string;
};

export function getTasks() {
  return fetch(`${url}/tasks`)
    .then(res => res.json())
    .then((data: Task[]) => data);
}

export function updateTaskScore({
  task,
  score,
}: {
  task: number;
  score: number;
}) {
  return fetch(`${url}/tasks/${task}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ score }),
  })
    .then(res => res.json())
    .then((data: Task) => data);
}
