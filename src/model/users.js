let users = {
  1: {
    id: '1',
    username: 'João da Silva',
  },
  2: {
    id: '2',
    username: 'José de Souza',
  },
};

const getUsers = () => {
  return Object.values(users);
};

const getUser = id => {
  return users[id];
};

export { getUsers, getUser };
