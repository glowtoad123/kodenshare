import faunadb, { query as q } from "faunadb"

export default async function(req, res){
    var client = new faunadb.Client({ secret: process.env.NEXT_FAUNA_KEY });
    try {
        const dbs = await client.query(
            q.Get(
                q.Match(
                    q.Index("dublicateUsername"), 
                    req.body.username
                )
            )
        )
        res.status(200).json(dbs.data)
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
}