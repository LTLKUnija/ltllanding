import { FaqData } from '../../common/AccordionSchemas';

export default function handler(req, res) {
  const { category } = req.query;

  if (category) {
   
    const filteredData = FaqData.find(item => item.FaqTitle === category);

    if (filteredData) {
      res.status(200).json(filteredData.questions);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } else {
    res.status(200).json(FaqData);
  }
}