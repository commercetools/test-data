import minimal from './minimal';
import { TStandalonePrice } from '../types';

describe('with standalone price currency value', () => {
  it('should have standalone price currency value', () => {
    const standalonePrice = minimal().build<TStandalonePrice>();

    expect(standalonePrice).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'EUR',
        }),
      })
    );
  });
});
