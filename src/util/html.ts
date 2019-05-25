import { JSDOM } from "jsdom";

export const parseStringToHTML = (html: string): Document => {
  const document = new JSDOM(html).window.document;
  return document;
};
