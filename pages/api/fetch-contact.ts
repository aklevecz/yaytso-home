// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  contact: any;
};

const { email, telegram, twitter, discord } = process.env;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contact = {
    email,
    telegram,
    twitter,
    discord,
  };
  res.status(200).json({ contact });
}
