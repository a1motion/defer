import test from "ava";
import defer from "../src";

test.cb(`should resolve remotely`, (t) => {
  const d = defer();
  d.then(t.end);
  d.resolve();
});
test.cb(`should reject remotely`, (t) => {
  const d = defer();
  d.catch(t.end);
  d.reject();
});
