import ServiceBase from '@/services/service-base'

class AuthenService extends ServiceBase{
  constructor() {
    super()
    this.baseUri = 'auth'
  }

  login(username, password) {
    return this.post({ body: { username, password }})
  }
}
