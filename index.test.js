import { TestSuite } from '@vertx/unit';

const suite = TestSuite.create('the_test_suite');

suite.test('my_test_case', context => {
  const s = 'value';
  context.assertEquals('value', s);
});

suite.run();
