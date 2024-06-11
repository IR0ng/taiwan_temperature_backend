import request from 'supertest'
import { Express } from 'express'

import { createServer } from '../src'

let server:Express

beforeAll(async () => {
  server = await createServer()
  server.listen(8888, () => {
    console.log(`App running on port ${8888}.`)
  })
})
describe('POST /login', () => {
  it('Should login when user exist and has correct password', (done) => {
    const payload = {
      email: 'user@gmail.com',
      password: '123456789'
    }

    request(server)
      .post('/login')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(201)
      .end(done)
  })
})

/**
 * Should login when user exist and has correct password
 * Should throw error when password is not correct
 * Should not return token when user is not exist
 */
