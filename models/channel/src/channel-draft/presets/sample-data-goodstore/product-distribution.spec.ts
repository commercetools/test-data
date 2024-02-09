import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import distributionChannel from './product-distribution';

describe('distribution channel', () => {
  it('should match REST snapshot', () => {
    const channel = distributionChannel().build<TChannelDraft>();
    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Distribution Channel",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = distributionChannel().buildGraphql<TChannelDraftGraphql>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "distribution-channel",
        "name": [
          {
            "locale": "en-US",
            "value": "Distribution Channel",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
