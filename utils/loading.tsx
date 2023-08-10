import { cache } from 'react'
import 'server-only'
import { Md5 } from 'ts-md5';
const fs = require('fs');
const fm = require('front-matter');


const getFile = cache(async (path: string) => {
  try {
    const file = await fs.promises.readFile(path, 'utf8');
    return file;
  } catch (err) { console.error( err ) }
})

export type Article = {
  title: string,
  description: string,
  date: string,
  body: string
}

const getArticles = cache(async (dir: string) => {
  let articles = await fs.promises.readdir(dir, 'utf8').then((paths: Array<string>) => {
    return Promise.all(paths.map((path) => {
      return fs.promises.readFile(dir + '/' + path, 'utf8').then((data: string) => {
        let content = fm(data);
        let header = content.attributes;
        let body = content.body;
        return [
          Md5.hashStr(String(header.title)),
          {
            title: header.title,
            description: header.description,
            date: header.date,
            body: body
          }
        ]
      });
    })).then((ret) => new Map(ret));
  });
  return articles;
})


export { getFile, getArticles };