// const {jest} = require('@jest/globals');
const {jest: requiredJest} = require('@jest/globals');
const express = require('express');
const request = require('supertest');
const jwt = require('jsonwebtoken');
const connectDB = require('../../config/db');
const router = require('../../routes/api/contacts');
const User = require('../../model/user/user');

const app = express();
app.use(express.json())
app.use('/api/contacts', router);

const mockUser = {
  "email": "hi@hi13.hi",
  "password": "12345678"
}

describe('Test contacts', () => {
  let user, token;

  beforeAll(async () => {
    await connectDB;
    await User.deleteOne({email: mockUser.email})
    user = await User.create(mockUser)
    const secret = process.env.JWT_SECRET_KEY;
    const issueToken = (payload, secret) => jwt.sign(payload, secret);
    token = issueToken({id: user.id}, secret);
    await User.updateOne({_id: user.id}, {token})
  })

  afterAll(async () => {
    const mongo = await connectDB;
    await User.deleteOne({email: mockUser.email});
    await mongo.disconnect();
  })

  test('Get all contacts', async () => {
    const response = await request(app)
      .get('/api/contacts')
      .set('Authorization', `Bearer ${token}`);
    expect (response.status).toEqual(200);
    expect (response.body).toBeDefined();
    expect (response.body.data.contacts).toBeInstanceOf(Array);
  })
})