import { articles } from '../../../data';

export default function handler (req, res) {
    return res.status(200).json(articles);
}