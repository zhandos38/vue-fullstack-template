import { BackendMethod } from 'remult'
import { Roles } from './Role'

export class AuthController {
  @BackendMethod({ allowed: true })
  static async signIn(username: string) {
    const validUsers = [
      { id: '1', name: 'Jane', roles: [Roles.admin] },
      { id: '2', name: 'Steve', roles: [Roles.user] },
      { id: '3', name: 'John', roles: [] }
    ]
    const user = validUsers.find((user) => user.name === username)

    if (!user) throw new Error("Invalid user, try 'Steve' or 'Jane'")
    // return (await import('jsonwebtoken')).sign(user, process.env['JWT_SECRET'] || 'my secret')
  }
}
