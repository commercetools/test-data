import type { TProductVariantDraft } from '../../../types';
import serenityQueenBedVariant01 from './serenity-queen-bed-variant-01';
describe(`with serenityQueenBedVariant01 preset`, () => {
  it('should return a sample serenityQueenBedVariant01 product preset', () => {
    const serenityQueenBedVariant01Preset =
      serenityQueenBedVariant01().build<TProductVariantDraft>();
    expect(serenityQueenBedVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten",
              "en-GB": "- Assembly included in delivery",
              "en-US": "- Assembly included in delivery",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Queensize-Bett mit industriellem Kissenkopfteil hat einen einzigartigen und kantigen Look. Das Kopfteil ist mit einem robusten beigefarbenen Stoff bezogen. Das Kopfteil umfasst Lederriemen, die ihm mit freiliegenden Schrauben und Bolzen ein industrielles Aussehen verleihen. Der Rahmen ist ebenfalls mit dem gleichen Stoff wie das Kopfteil bezogen. Das Bett hat ein einfaches, minimalistisches Design mit einem Holzrahmen und geraden Linien, die die kühne Aussage des Kopfteils ergänzen. Insgesamt wäre diese Art von Bett perfekt für jemanden, der seinem Schlafzimmerdekor einen Hauch von Industriestil verleihen möchte.",
              "en-GB": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
              "en-US": "A queen bed with an industrial pillow headboard has a unique and edgy look. The headboard is covered in a sturdy beige canvas. The headboard includes leather straps that give it an industrial look with exposed screws and bolts. The frame is also covered in the same canvas as the headboard. The bed has a simple, minimalist design with a wood frame and straight lines to complement the bold statement of the headboard. Overall, this type of bed would be perfect for someone who wants to add a touch of industrial style to their bedroom décor.",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Gray",
              "en-US": "Gray",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#DFDFDD",
              "en-GB": "#DFDFDD",
              "en-US": "#DFDFDD",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2000,
              "w": 2000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Serenity%20Quuen%20Bed-JxrePlGT.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 99900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "IQB-09",
      }
    `);
  });
});
