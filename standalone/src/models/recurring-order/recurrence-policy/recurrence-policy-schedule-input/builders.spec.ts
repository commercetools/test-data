import { intervalUnit } from '../../standard-schedule/constants';
import { StandardScheduleInputGraphql } from '../../standard-schedule/standard-schedule-input';
import { RecurrencePolicyScheduleInputGraphql } from './index';

describe('RecurrencePolicyScheduleInput Builder', () => {
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = RecurrencePolicyScheduleInputGraphql.random()
      .standard(StandardScheduleInputGraphql.random())
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        standard: expect.objectContaining({
          value: expect.any(Number),
          intervalUnit: expect.toBeOneOf(Object.values(intervalUnit)),
        }),
        dayOfMonth: null,
      })
    );
  });
});
