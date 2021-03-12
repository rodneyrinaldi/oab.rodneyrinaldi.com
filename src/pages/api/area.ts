import type { NextApiRequest, NextApiResponse } from 'next'
import records from '../../data/area.json'

type Data = {
    name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ name: 'John Doe' })
}
