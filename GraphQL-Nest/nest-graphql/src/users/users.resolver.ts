/* eslint-disable prettier/prettier */
// user.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './users.service';
import { User } from './users.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('name') name: string, @Args('email') email: string): Promise<User> {
    const partialUser: Partial<User> = { name, email };
    return this.userService.create(partialUser as User); 
  }
  
}
