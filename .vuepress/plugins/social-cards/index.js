const fs = require("fs");
const path = require("path");
const glob = require("globby");
const frontmatter = require("frontmatter");
const puppeteer = require("puppeteer");

const getHtml = require("./getHtml");

const srcDir = path.resolve(__dirname, "../../..");

const files = glob.sync("*/README.md", { cwd: srcDir });
const events = files.map(file => {
  const content = fs.readFileSync(path.resolve(srcDir, file), "utf8");
  const link = `/${file.replace(/README\.md$/, "")}`;
  const { data } = frontmatter(content);

  return {
    id: parseInt(file),
    ...data,
    link
  };
});

events.sort((a, b) => b.id - a.id);

module.exports = async function socialCardsPlugin(options, context) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1200,
      height: 670
    }
  });

  for (event of events) {
    for (talk of event.agenda.filter(a => a.type === "talk")) {
      const nameMatch = talk.speaker.match(/(.*?)<(.*?)>/);
      const speaker = nameMatch
        ? { twitter: nameMatch[2].trim(), presenter: nameMatch[1].trim() }
        : {
            twitter: "",
            presenter: talk.speaker
          };
      const pageHtml = getHtml({
        title: talk.title.replace(/- (\d+)mins$/, ""),
        eventId: event.id,
        eventName: event.title,
        date: new Date(event.date).toDateString(),
        time: event.time,
        ...speaker
      });

      const page = await browser.newPage();
      await page.setContent(pageHtml);
      await page.screenshot({
        path: path.join(
          "social-cards",
          `${event.id}-${talk.title.toLowerCase().replace(/ /g, "-")}.png`
        )
      });

      await page.close();
    }
  }

  await browser.close();
};
