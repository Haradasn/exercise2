// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import apidata from '../../../components/data'
export default function handler(req, res)  {
  const {
    query: {id} 
  } = req
  
  res.json(apidata[id])  
}