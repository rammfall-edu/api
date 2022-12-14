import fastify from '../index.mjs';

describe('fastify', () => {
  it('should returns correct string', async () => {
    const result = await fastify.inject({
      method: 'GET',
      url: '/hello',
    });
    expect(result.body).toStrictEqual('world');
  });
});
