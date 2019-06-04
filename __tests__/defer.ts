import defer from "../src";

describe(`defer`, () => {
  test(`should resolve remotely`, (done) => {
    const d = defer();
    d.then(done);
    d.resolve();
  });
  test(`should reject remotely`, (done) => {
    const d = defer();
    d.then().catch(done);
    d.reject();
  });
});
