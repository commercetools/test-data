import type { TImage } from '../types';
import commercetoolsApiPlatform from './commercetools-api-platform';

describe('with the preset `commercetools api platform`', () => {
  it('should return the ct api platform image url, label and dimensions', () => {
    const image = commercetoolsApiPlatform().build<TImage>();

    expect(image).toEqual(
      expect.objectContaining({
        url: expect.stringContaining('https://bit.ly/36XHFNP'),
        label: expect.stringContaining('commercetools API platform'),
        dimensions: expect.objectContaining({
          w: 1094,
          h: 740,
        }),
      })
    );
  });
});
