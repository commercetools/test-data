import { DayOfMonthScheduleDraftRest } from './index';

describe('DayOfMonthScheduleDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DayOfMonthScheduleDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        day: expect.any(Number),
        type: 'dayOfMonth',
      })
    );
  });
});
