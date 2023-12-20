import userModel from '../models/userModel.js';

export async function login(req, res, next) {
    try {

        const { email_id, password } = req.body

        // console.log(email_id, password)

        const user = await userModel.findOne({ email_id: email_id })

        // console.log(user)
        if (user) {
            // console.log(user.password === password)
            if (user.password === password) { return res.status(200).send({ message: " login success", data: req.body }) }
            else { return res.status(401).send({ message: " login failure" }) }
        }
        return res.status(400).send({ message: "client Error" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}