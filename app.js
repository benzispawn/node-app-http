'use strict'

const proxy = require('fastify-http-proxy');
// Adicionado depois
//const sensible = require('fastify-sensible');

module.exports = async function (fastify, opts) {
  //fastify.register(sensible)
  fastify.register(proxy, {
    upstream: 'https://www.netflix.com'
    // async preHandler(request, reply) {
    //   if (request.query.token !== 'abc') {
    //     throw fastify.httpErrors.unauthorized()
    //   }
    // }
  })
}