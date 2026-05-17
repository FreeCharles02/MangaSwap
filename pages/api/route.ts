import type { NextApiRequest, NextApiResponse } from 'next'
import { run, getAllManga } from '../../lib/connection' 
import { all } from 'axios';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
        run();
        const allManga = getAllManga();
        console.log(getAllManga())
        res.status(200).send(allManga)
    } catch {
        console.log("Ooops failed connection")
    }
  } else {
    console.log("oops this is diff!")
  }
}