import uuidv4 from 'uuid/v4';

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

const getMessages = () => {
  return Object.values(messages);
};

const getMessage = id => {
  return messages[id];
};

const addMessage = text => {
  const id = uuidv4();
  const message = {
    id,
    text,
  };

  messages[id] = message;

  return message;
};

export { getMessage, getMessages, addMessage };
