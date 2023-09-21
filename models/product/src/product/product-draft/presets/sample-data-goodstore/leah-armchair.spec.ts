import type { TProductDraft } from '../../../types';
import leahArmchair from './leah-armchair';
describe(`with leahArmchair preset`, () => {
  it('should return a sample leahArmchair product preset', () => {
    const leahArmchairPreset = leahArmchair().build<TProductDraft>();
    expect(leahArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "leah-armchair",
      "name": {
            "de-DE": "Leah Sessel",
            "en-GB": "Leah Armchair",
            "en-US": "Leah Armchair"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "leah-sessel",
            "en-GB": "leah-armchair",
            "en-US": "leah-armchair"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}},{"name":"product-description","value":{"en-GB":"A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.","en-US":"A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.","de-DE":"Ein getufteter Sessel mit Messingbeinen ist ein elegantes und luxuriöses Möbelstück. Der Stuhl verfügt typischerweise über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem und plüschigem Material bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Messingbeine einen Hauch von Glamour und Raffinesse verleihen. Die Beine verleihen dem Stuhl ein elegantes und modernes Aussehen. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich."}},{"name":"color-filter","value":{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}},{"name":"color","value":{"en-GB":"#AAAAAA","de-DE":"#AAAAAA","en-US":"#AAAAAA"}},{"name":"colorlabel","value":{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}},{"name":"finishlabel","value":{"en-GB":"Brass","de-DE":"Messing","en-US":"Brass"}},{"name":"finish","value":{"en-GB":"#E9C55A","de-DE":"#E9C55A","en-US":"#E9C55A"}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
