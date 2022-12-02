// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { ProjectType } from '../../typedefinition';

const query = groq`*[_type == "project"]`

type Data = {
  project: ProjectType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const project: ProjectType[] = await sanityClient.fetch(query);

  res.status(200).json({ project })
}
