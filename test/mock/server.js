import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const createServer = (handlerConfig) => {
  const handlers = handlerConfig.map((handler) => {
    return rest[handler.method || 'get'](handler.path, (req, res, ctx) => {
      return res(ctx.json(handler.res(req, res, ctx)));
    });
  });

  const server = setupServer(...handlers);
  beforeAll(() => {
    server.listen();
    console.log('Server is starting');
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
    console.log('Server is closing');
  });
};
