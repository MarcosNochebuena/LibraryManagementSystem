import { User } from "../models/User";
import { UserRepository } from "../repositories/user/UserRepository";

export class UserService {
  private userRepository: UserRepository = new UserRepository();
  constructor(){}

  /**
   * create
   */
  public create(user: User): void {
    this.userRepository.add(user);
  }

  /**
   * getAll
   */
  public getAll(): User[] {
    const users: User[] = [new User('ejemplo1', 'mail1@mail.com'), new User('ejemplo1', 'mail1@.com')]
    return users;
  }

  /**
   * update
   */
  public update(user: User): void {
    console.log("Actualizando usuario " + user);
  }

  /**
   * destroy
   */
  public destroy(user: User): void {
    console.log("Eliminando al usuario con el id " + user.getId());
  }

  /**
   * getById
   */
  public getById(id: number): User {
    const user: User = new User(id.toString(), 'mail@id.com')
    return user;
  }

}
