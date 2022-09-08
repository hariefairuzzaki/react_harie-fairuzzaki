class User {
  constructor(props) {
    let { id, username, password } = props;
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

class UserService extends User {
  constructor(props) {
    super(props);
    this.users = [props];
  }

  getAllUsers() {
    return this.users;
  }

  getUserById() {
    return this.users.filter((user) => user.id == 1);
  }
}

const userServices = new UserService({ id: 1, username: "harie", password: "harie" });

console.log(userServices);
console.log("All User: ", userServices.getAllUsers());
console.log("User By Id: ", userServices.getUserById());
