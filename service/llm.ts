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

export function imagetoText(req: {
  prompt: string;
  history: [string, string][];
  image?: string;
}) {
  const url = 'https://image-to-text-gkbtujqmvw.ap-southeast-1.fcapp.run/';

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_prompt: req.prompt,
      history: req.history,
      image: req.image,
    }),
  })
    .then(res => res.json())
    .catch(err => console.error(err));
}

export const summarizeHistory = (history: [string, string][]) => {
  const body = {
    system_prompt: `You are helpful AI to help people to get the conversation title.
    You will be recieved the conversation history and you will provide the title of the conversation.
    You have to only provide the title of the conversation DO NOT provide any other information.`,
    prompt: `Conversation: ${history
      .map(([m1, m2]) => `User: ${m1} AI: ${m2}`)
      .join(', ')}, Title: `,
    history: [],
  };

  return fetch(`${wsUrl}`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
};
