import type { TProductDraft } from '../../../types';
import iceBucket from './ice-bucket';
describe(`with iceBucket preset`, () => {
  it('should return a sample iceBucket product preset', () => {
    const iceBucketPreset = iceBucket().build<TProductDraft>();
    expect(iceBucketPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "ice-bucket",
      "name": {
            "de-DE": "Eis Eimer",
            "en-GB": "Ice Bucket",
            "en-US": "Ice Bucket"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "eis-eimer",
            "en-GB": "ice-bucket",
            "en-US": "ice-bucket"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"productspec","value":{"en-GB":"- Stainless steel\n- Dishwasher safe","de-DE":"- Edelstahl\n- Spülmaschinenfest","en-US":"- Stainless steel\n- Dishwasher safe"}},{"name":"product-description","value":{"en-GB":"A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.","en-US":"A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.","de-DE":"Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Es besteht aus Edelstahl und ist so konzipiert, dass es das Eis über einen längeren Zeitraum kalt hält.  Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, um zu verhindern, dass das Eis an den Wänden des Eimers haftet."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
