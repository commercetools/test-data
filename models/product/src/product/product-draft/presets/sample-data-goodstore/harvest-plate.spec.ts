import type { TProductDraft } from '../../../types';
import harvestPlate from './harvest-plate';
describe(`with harvestPlate preset`, () => {
  it('should return a sample harvestPlate product preset', () => {
    const harvestPlatePreset = harvestPlate().build<TProductDraft>();
    expect(harvestPlatePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "plates",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "serving-platters",
            "typeId": "category",
          },
          {
            "key": "serveware",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "harvest-plate",
      "name": {
            "de-DE": "Ernteplatte",
            "en-GB": "Harvest Plate",
            "en-US": "Harvest Plate"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "ernteplatte",
            "en-GB": "harvest-plate",
            "en-US": "harvest-plate"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}},{"name":"product-description","value":{"en-GB":"This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.","en-US":"This seashell-shaped serving plate is ideal for serving seafood, such as shrimp, oysters, or sushi rolls, but can also be used for other types of cuisine. It is a popular choice for beach-themed parties, coastal restaurants, or for those who enjoy decorating their home with nautical accents.  Overall, a seashell shaped serving plate is a unique and stylish choice for serving food. Its natural appearance and beach-inspired design make it a fun and whimsical addition to any dining occasion.","de-DE":"Diese muschelförmige Servierplatte ist ideal zum Servieren von Meeresfrüchten wie Garnelen, Austern oder Sushi-Rollen, kann aber auch für andere Arten der Küche verwendet werden. Es ist eine beliebte Wahl für Strandpartys, Küstenrestaurants oder für diejenigen, die ihr Zuhause gerne mit nautischen Akzenten dekorieren.  Insgesamt ist ein muschelförmiger Servierteller eine einzigartige und stilvolle Wahl zum Servieren von Speisen. Sein natürliches Aussehen und das vom Strand inspirierte Design machen es zu einer lustigen und skurrilen Ergänzung für jeden Essensanlass."}},{"name":"color","value":{"en-GB":"#FFF","de-DE":"#FFF","en-US":"#FFF"}},{"name":"colorlabel","value":{"en-GB":"White","de-DE":"Weiß","en-US":"White"}},{"name":"color-filter","value":{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
