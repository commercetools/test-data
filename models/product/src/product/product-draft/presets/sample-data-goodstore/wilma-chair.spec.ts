import type { TProductDraft } from '../../../types';
import wilmaChair from './wilma-chair';
describe(`with wilmaChair preset`, () => {
  it('should return a sample wilmaChair product preset', () => {
    const wilmaChairPreset = wilmaChair().build<TProductDraft>();
    expect(wilmaChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "wilma-chair",
      "name": {
            "de-DE": "Wilma Stuhl",
            "en-GB": "Wilma Chair",
            "en-US": "Wilma Chair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "wilma-stuhl",
            "en-GB": "wilma-chair",
            "en-US": "wilma-chair"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "standard-tax",
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Cushion covers are removable and machine washable","de-DE":"- Kissenbezüge sind abnehmbar und maschinenwaschbar","en-US":"- Cushion covers are removable and machine washable"}},{"name":"product-description","value":{"en-GB":"A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.","en-US":"A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.","de-DE":"Ein getufteter armloser Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne mit getufteten Details für zusätzlichen Komfort und Stil. Dem Stuhl fehlen Armlehnen, um mehr Flexibilität und Benutzerfreundlichkeit zu ermöglichen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Insgesamt ist ein getufteter Futonstuhl ohne Armlehnen ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. in einem Wohnzimmer, Schlafzimmer oder Heimbüro."}},{"name":"colorlabel","value":{"en-GB":"Cream","de-DE":"Creme","en-US":"Cream"}},{"name":"finishlabel","value":{"en-GB":"Black Iron","de-DE":"Schwarzes Eisen","en-US":"Black Iron"}},{"name":"finish","value":{"en-GB":"#000","de-DE":"#000","en-US":"#000"}},{"name":"color","value":{"en-GB":"#E4DCC1","de-DE":"#E4DCC1","en-US":"#E4DCC1"}},{"name":"color-filter","value":{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
