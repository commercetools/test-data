import { StandardScheduleDraftRest } from './index';

describe('StandardScheduleDraft Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = StandardScheduleDraftRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        type: 'standard',
        value: expect.any(Number),
        intervalUnit: expect.any(String),
      })
    );
  });
});
