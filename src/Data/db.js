let friends = [
    {
        id: 1,
        name: 'David',
    },
    {
        id: 2,
        name: 'Christopher',
    },
    {
      id: 3,
      name: 'Codi',
    },
    {
      id: 4,
      name: 'Nikhil',
    },
    {
      id: 5,
      name: 'Nathaniel',
    },
];
let nextId = 6;

export default friends;
export const getFriends = () => friends;

export const addFriends = () => (friend) => {
    friend.id = getNextId();
    friends = [...friends, friend]
    return friends;
}

function getNextId() {
    return nextId++;
}
