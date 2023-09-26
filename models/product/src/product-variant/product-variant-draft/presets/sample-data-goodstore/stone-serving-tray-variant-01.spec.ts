import type { TProductVariantDraft } from '../../../types';
import stoneServingTrayVariant01 from './stone-serving-tray-variant-01';
describe(`with stoneServingTrayVariant01 preset`, () => {
  it('should return a sample stoneServingTrayVariant01 product preset', () => {
    const stoneServingTrayVariant01Preset =
      stoneServingTrayVariant01().build<TProductVariantDraft>();
    expect(stoneServingTrayVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Zerbrechlich",
              "en-GB": "- Fragile",
              "en-US": "- Fragile",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Das Stein-Serviertablett besteht aus Naturstein, der zum Servieren und Präsentieren von Speisen dient. Das Tablett besteht aus stabilem Schiefer.  Das Gewicht und die Textur des Steinmaterials verleihen dem Tablett Stabilität und ein Gefühl von Luxus und machen es ideal zum Servieren einer Vielzahl von Speisen, einschließlich Käse, Obst oder Brot. Das Natursteinmaterial des Tabletts macht es auch zu einer ausgezeichneten Wahl für den Einsatz im Freien, z. B. bei einem Picknick oder Grillen.  Ein Serviertablett aus Stein ist leicht zu reinigen und zu pflegen. Es kann mit Wasser und Seife gewaschen werden und sollte nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Insgesamt ist ein Serviertablett aus Stein ein funktionales und ästhetisch ansprechendes Element, das jeder Umgebung einen Hauch von natürlicher Eleganz verleiht. Seine Haltbarkeit, Stabilität und sein einzigartiges Design machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen und Getränken.",
              "en-GB": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
              "en-US": "The Stone Serving Tray is made of natural stone that is designed to serve and display food. The tray is made of sturdy slate.  The weight and texture of the stone material provide stability and a sense of luxury to the tray, making it ideal for serving a variety of items, including cheese, fruits or bread. The tray's natural stone material also makes it an excellent choice for use in outdoor settings, such as a picnic or barbecue.  A stone serving tray is easy to clean and maintain. It can be washed with soap and water, and should be dried thoroughly after use to prevent any moisture from being trapped inside.  Overall, a stone serving tray is a functional and aesthetically pleasing item that adds a touch of natural elegance to any setting. Its durability, stability and unique design make it a popular choice for serving and displaying food and beverages.",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Stein",
              "en-GB": "Stone",
              "en-US": "Stone",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#6B6B6B",
              "en-GB": "#6B6B6B",
              "en-US": "#6B6B6B",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2358,
              "w": 4125,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_574599257-fOKRHCDx.jpeg",
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
              "centAmount": 2499,
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
              "centAmount": 2499,
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
              "centAmount": 2499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SST-02",
      }
    `);
  });
});
