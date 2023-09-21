import type { TProductDraft } from '../../../types';
import ecruDoubleBed from './ecru-double-bed';
describe(`with ecruDoubleBed preset`, () => {
  it('should return a sample ecruDoubleBed product preset', () => {
    const ecruDoubleBedPreset = ecruDoubleBed().build<TProductDraft>();
    expect(ecruDoubleBedPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "beds",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "ecru-double-bed",
      "name": {
            "de-DE": "Ecru Doppelbett",
            "en-GB": "Ecru Double Bed",
            "en-US": "Ecru Double Bed"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "ecru-doppelbett",
            "en-GB": "ecru-double-bed",
            "en-US": "ecru-double-bed"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Comes with pillow-top headboard\n- Assembly included","de-DE":"- Mit gepolstertem Kopfteil\n- Montage inklusive","en-US":"- Comes with pillow-top headboard\n- Assembly included"}},{"name":"product-description","value":{"en-GB":"A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.","en-US":"A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.","de-DE":"Ein Doppelbett mit Sofakopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht."}},{"name":"color-filter","value":{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
