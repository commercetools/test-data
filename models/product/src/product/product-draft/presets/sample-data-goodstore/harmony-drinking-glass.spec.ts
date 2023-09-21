import type { TProductDraft } from '../../../types';
import harmonyDrinkingGlass from './harmony-drinking-glass';
describe(`with harmonyDrinkingGlass preset`, () => {
  it('should return a sample harmonyDrinkingGlass product preset', () => {
    const harmonyDrinkingGlassPreset =
      harmonyDrinkingGlass().build<TProductDraft>();
    expect(harmonyDrinkingGlassPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "harmony-drinking-glass",
      "name": {
            "de-DE": "Harmonie-Trinkglas",
            "en-GB": "Harmony Drinking Glass",
            "en-US": "Harmony Drinking Glass"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "de-DE": "harmonie-trinkglas",
            "en-GB": "harmony-drinking-glass",
            "en-US": "harmony-drinking-glass"
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
          "attributes": [{"name":"productspec","value":{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}},{"name":"product-description","value":{"en-GB":"The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.","en-US":"The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.","de-DE":"Das Trinkglas Harmony wurde entwickelt, um Wasser oder andere Getränke zu halten. Es hat eine Kapazität von etwa 8 bis 12 Unzen.  Das Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht.  Das Trinkglas Harmony kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke.  Die Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist das Harmony Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Umgebungen."}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
