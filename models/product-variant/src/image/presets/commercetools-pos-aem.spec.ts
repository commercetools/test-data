import type { TImage } from '../types';
import commercetoolsPosAem from './commercetools-pos-aem';

describe('with the preset `commercetools pos aem`', () => {
  it('should return the ct pos aem image url, label and dimensions', () => {
    const image = commercetoolsPosAem().build<TImage>();

    expect(image).toEqual(
      expect.objectContaining({
        url: expect.stringContaining('https://bit.ly/3lCCAiE'),
        label: expect.stringContaining(
          'commercetools sits between POS and AEM'
        ),
        dimensions: expect.objectContaining({
          w: 800,
          h: 450,
        }),
      })
    );
  });
});
