const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

// Clean db after all tests
afterAll(async () => {
  await connection.migrate.rollback();
  await connection.destroy();
});

describe('ONG', () => {
  const createOngToTests = async () => {
    return await request(app)
      .post('/ongs')
      .send({
        name: "ONG",
        email: "ong@ong.com.br",
        whatsapp: "8500000000",
        city: "Cascavel",
        uf: "CE"
      });
  };

  beforeEach(async () => {
    await connection.migrate.latest();
  });

  /**
   * ONG's tests
   */
  it ('should be able to create a new ONG', async () => {
    const ong = await createOngToTests();
  
    expect(ong.body).toHaveProperty('id');
    expect(ong.body.id).toHaveLength(8);
  });

  it ('should be able to create a new session', async () => {
    const ong = await createOngToTests();
    
    const response = await request(app)
      .post('/sessions')
      .send({
        id: ong.body.id
      });

    expect(response.body).toHaveProperty('name');
  });

  it ("should be able to list all ONG's", async () => {
    await request(app)
      .get('/ongs')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it ('should be able to see a profile', async () => {
    const ong = await createOngToTests();

    await request(app)
      .get('/profile')
      .set('Authorization', ong.body.id)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});