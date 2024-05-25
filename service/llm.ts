const wsUrl =
  'http://quickstart-20240525-a446.5715515353908375.ap-southeast-1.pai-eas.aliyuncs.com';
const token = 'NTk0MTVmOGJlMWU2OGQzODE1NmJjNjI5MTk2OWFhMTRkYWI5Y2UyOA==';

export const sendMessage = (req: {
  prompt: string;
  history: [string, string][];
}) => {
  const body = {
    system_prompt: `You are helpful AI to help people to answer sustainability related questions and \
    if needed you will create tickets for the user to get help from the experts. 
    You will follow the instructions below:
    1. If the user asks a sustainability related question, you should answer the question.
    2. If the user asks an unrelated question, you should say "I am sorry, I am not able to help you with that. Please ask me a sustainability related question."
    3. Do not provide any outsourced links or any other information that is not related to the question.
    4. If the user asks any location-based questions, you definitely answer with this tag: <Map> `,
    prompt: req.prompt,
    history: req.history,
  };

  return fetch(`${wsUrl}`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
};

export function imagetoText(image: string) {
  const body = {
    image,
  };
  console.log('body', body);

  const url = 'https://image-to-text-gkbtujqmvw.ap-southeast-1.fcapp.run/';
  return fetch(url, {
    method: 'POST',

    body: JSON.stringify({
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=',
    }),
  }).then(res => res.json());
}

export const summarizeHistory = (history: [string, string][]) => {
  const body = {
    system_prompt: `You are helpful AI to help people to answer sustainability related questions and \
    if needed you will create tickets for the user to get help from the experts. 
    You will follow the instructions below:
    1. If the user asks a sustainability related question, you should answer the question.
    2. If the user asks an unrelated question, you should say "I am sorry, I am not able to help you with that. Please ask me a sustainability related question."
    3. Do not provide any outsourced links or any other information that is not related to the question.
    4. If the user asks any location-based questions, you definitely answer with this tag: <Map> `,
    prompt: 'Get the title of the conversation',
    history,
  };

  return fetch(`${wsUrl}`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
};
