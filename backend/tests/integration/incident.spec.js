const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

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

  const createIncidentToTests = async (ongid) => {
    return await request(app)
      .post('/incidents')
      .set('Authorization', ongid)
      .send({
        title: "Incident",
        description: "Description",
        value: 10
      });
  };

  beforeEach(async () => {
    await connection.migrate.latest();
  });

  /**
   * Incidents tests
   */
  it ('should be able to create a new incident', async () => {
    const ong = await createOngToTests();
    const incident = await createIncidentToTests(ong.body.id);

    expect(incident.body).toHaveProperty('id');
    expect(incident.body.id);

    incidentid = incident.body.id;
  });

  it ('should be able to delete a incident', async () => {
    const ong = await createOngToTests();
    const incident = await createIncidentToTests(ong.body.id);

    await request(app)
      .delete(`/incidents/${incident.body.id}`)
      .set('Authorization', ong.body.id)
      .expect(204);
  });

  it ('should be able to list all incidents', async () => {
    await request(app)
      .get('/incidents?page=1')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});