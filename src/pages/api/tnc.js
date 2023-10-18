import { links } from "./data/tnclinks";

export default function handler(req, res) {
  res.status(200).json(links);
}
