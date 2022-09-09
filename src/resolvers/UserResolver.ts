import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import crypto from 'crypto'
import { User } from '../models/User'

@Resolver()
export class UserResolver {
  private data: User[] = []

  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomUUID(), name }

    this.data.push(user)

    return user
  }
}