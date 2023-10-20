import { ac1, ac2 } from "./data/accordions"

export default function handler(req, res) {
  const { id } = req.query

  if (id === "ac1") res.status(200).json(ac1)
  if (id === "ac2") res.status(200).json(ac2)
}
