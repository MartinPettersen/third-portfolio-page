// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { EducationType } from '../../typedefinition';

const query = groq`*[_type == "education"]`

type Data = {
  education: EducationType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: EducationType[] = await sanityClient.fetch(query);

  res.status(200).json({ education })
}
