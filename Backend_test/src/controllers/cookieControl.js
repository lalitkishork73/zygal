
export async function Cookie_setData(req, res, next) {
    try {

        const { data } = req.body;
        res.cookie('user_data', data);

        return res.status(200).send("Cookie_set");

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
export async function Cookie_searchData(req, res, next) {
    try {

        const { searchData } = req.body;
        const userData = req.cookies.user_data || '';
        const result = userData.includes(searchData) ? userData : 'No message found.';
        return res.status(200).send(result);

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
export async function Cookie_clearCookie(req, res, next) {
    try {
        res.clearCookie('user_data');
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}


