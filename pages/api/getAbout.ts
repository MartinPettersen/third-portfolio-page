// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { AboutType } from '../../typedefinition';

const query = groq`*[_type == "about"]`

type Data = {
  about: AboutType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const about: AboutType[] = await sanityClient.fetch(query);

  res.status(200).json({ about })
}
