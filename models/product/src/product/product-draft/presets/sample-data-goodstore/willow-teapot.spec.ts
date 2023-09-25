import type { TProductDraft } from '../../../types';
import willowTeapot from './willow-teapot';
describe(`with willowTeapot preset`, () => {
  it('should return a sample willowTeapot product preset', () => {
    const willowTeapotPreset = willowTeapot().build<TProductDraft>();
    expect(willowTeapotPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "willow-teapot",
      "name": {
            "de-DE": "Willow Teekanne",
            "en-GB": "Willow Teapot",
            "en-US": "Willow Teapot"
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "willow-teekanne",
            "en-GB": "willow-teapot",
            "en-US": "willow-teapot"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Hand wash only","de-DE":"- Handwäsche nur","en-US":"- Hand wash only"}},{"name":"product-description","value":{"en-GB":"This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.","en-US":"This teapot is made of fine porcelain, commonly known as bone china. It is a delicate and elegant piece of tableware that is designed to brew and serve tea.   The fine china material used in the teapot provides an excellent heat retention capacity, ensuring that the tea stays warm for an extended period. It is also non-porous, which means it does not absorb any flavors or odors from the tea, preserving the purity of the flavor.  To clean a china teapot, it is recommended to wash it by hand with a mild detergent, using a soft cloth or sponge. Harsh cleaning agents or abrasives should be avoided, as they can damage the delicate surface of the teapot.  Overall, a china teapot is a timeless and classic piece of tableware that adds a touch of elegance and sophistication to any tea party or gathering. Its delicate and intricate design, combined with its functionality and heat retention properties, make it a cherished item for tea lovers around the world.","de-DE":"Diese Teekanne besteht aus feinem Porzellan, allgemein bekannt als Bone China. Es ist ein zartes und elegantes Geschirr, das zum Aufbrühen und Servieren von Tee bestimmt ist.  Das in der Teekanne verwendete feine Porzellanmaterial bietet ein hervorragendes Wärmespeichervermögen und sorgt dafür, dass der Tee lange warm bleibt. Es ist auch nicht porös, was bedeutet, dass es keine Aromen oder Gerüche aus dem Tee aufnimmt, wodurch die Reinheit des Geschmacks erhalten bleibt.  Um eine Teekanne aus Porzellan zu reinigen, wird empfohlen, sie von Hand mit einem milden Reinigungsmittel und einem weichen Tuch oder Schwamm zu waschen. Scharfe Reinigungsmittel oder Scheuermittel sollten vermieden werden, da sie die empfindliche Oberfläche der Teekanne beschädigen können.  Insgesamt ist eine Teekanne aus Porzellan ein zeitloses und klassisches Geschirr, das jeder Teeparty oder Zusammenkunft einen Hauch von Eleganz und Raffinesse verleiht. Sein zartes und kompliziertes Design, kombiniert mit seiner Funktionalität und seinen Wärmespeichereigenschaften, machen ihn zu einem geschätzten Gegenstand für Teeliebhaber auf der ganzen Welt."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
