export function findUser(users, userId) {
    const user = users.find((testedUser) => {
      return testedUser.id === userId;
    });
    return user;
  }
  