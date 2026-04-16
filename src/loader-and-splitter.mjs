import'dotenv/config'
import 'cheerio'
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from '@langchain/classic/text_splitter';

const cheerioLoader = new CheerioWebBaseLoader(
    'https://juejin.cn/post/7233327509919547452',
    {
        selector: '.main-area p'
    }
)

const documents = await cheerioLoader.load()
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 400,
    chunkOverlap: 50,
    separators:[".","!","?"]
})
const splitDocuments = await textSplitter.splitDocuments(documents)

// console.log('== doucuments', documents)
console.log(splitDocuments)