const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("https://plainenglish.io/blog")
  .then((response) => {
    let links = [];

    const body = response.data;

    const $ = cheerio.load(body);

    const element = ".PostPreview_container__f8slr";

    $(element).each(function () {
      const _link = $(this).find("a").prop("href");

      if (_link !== undefined) {
        links.push(`https://plainenglish.io` + _link);
      }
    });
    return links;
  })

  .then((response) => {
    console.log(response);
  })

  .catch((error) => {
    console.error("Error while scraping", error);
  });
