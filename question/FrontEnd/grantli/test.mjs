import grantli from './answer.mjs';
import { it } from 'mocha';
import { assert } from 'chai';

it(': 输入 ', () => {
  assert.deepEqual(grantli(), undefined);
});
