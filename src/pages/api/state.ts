import type { NextApiRequest, NextApiResponse } from 'next'
import records from '../../data/state.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ records })
}
