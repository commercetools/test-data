import type { TProductDraft } from '../../../types';
import rusticOvenCasserole from './rustic-oven-casserole';
describe(`with rusticOvenCasserole preset`, () => {
  it('should return a sample rusticOvenCasserole product preset', () => {
    const rusticOvenCasserolePreset =
      rusticOvenCasserole().build<TProductDraft>();
    expect(rusticOvenCasserolePreset).toMatchInlineSnapshot(`
      {
        "categories": [

        ],
      "categoryOrderHints": {},
      "key": "rustic-oven-casserole",
      "name": {
            "de-DE": "Rustikaler Ofentopf",
            "en-GB": "Rustic Oven Casserole",
            "en-US": "Rustic Oven Casserole"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "rustikaler-ofentopf",
            "en-GB": "rustic-oven-casserole",
            "en-US": "rustic-oven-casserole"
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
          "attributes": [{"name":"product-description","value":{"de-DE":"Ein rustikaler Keramik-Ofentopf ist ein Kochgeschirr aus Keramik, das dazu bestimmt ist, im Ofen zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Gerichten verwendet zu werden. Es hat ein traditionelles und rustikales Aussehen, oft mit erdigen Farben, strukturierten Oberflächen und unebenen Kanten.  Das Keramikmaterial ist dick und langlebig, sodass es hohen Temperaturen im Ofen standhält, ohne zu reißen oder abzusplittern. Es ist auch nicht reaktiv, was bedeutet, dass es nicht mit sauren oder scharfen Speisen interagiert, wodurch sichergestellt wird, dass die Aromen des Gerichts intakt bleiben.  Das rustikale Design des Keramikofentopfes verleiht der Küche und dem Essbereich einen Hauch von Wärme und Charme. Besonders in der kalten Jahreszeit eignet er sich perfekt zum Servieren warmer und herzhafter Speisen.  Um einen rustikalen Ofentopf aus Keramik zu reinigen, empfiehlt es sich, ihn nach Gebrauch abkühlen zu lassen, bevor Sie ihn mit warmem Seifenwasser waschen. Es sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein rustikaler Ofentopf aus Keramik ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Seine robuste Konstruktion und sein klassisches Design machen ihn zu einem Grundnahrungsmittel für Hobbyköche und Köche gleichermaßen.","en-GB":"A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.","en-US":"A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike."}},{"name":"productspec","value":{"en-GB":"- Does not include lid","de-DE":"- Ohne Deckel","en-US":"- Does not include lid"}},{"name":"colorlabel","value":{"en-GB":"Terracotta","de-DE":"Terrakotta","en-US":"Terracotta"}},{"name":"color","value":{"en-GB":"#E3793E","de-DE":"#E3793E","en-US":"#E3793E"}},{"name":"color-filter","value":{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
