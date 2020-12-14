import faunadb, { query as q } from "faunadb"

export default async function(req, res){
    var client = new faunadb.Client({ secret: process.env.NEXT_FAUNA_KEY });

    try {
        const dbs = await client.query(
            q.Update(
                q.Ref(
                    q.Collection("Accounts"),
                    req.body.id
                ),
                {
                    data: {
                        username: req.body.changedUsername,
                        password: req.body.changedPassword
                    }
                }
            )
            )
        res.status(200).json(dbs)
    } catch(error) {
        res.status(500).json({Error: error.message})
    }

}