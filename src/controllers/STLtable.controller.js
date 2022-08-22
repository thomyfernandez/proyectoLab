import { getConnection } from "../database/connection";

export const getSTL = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM STLtable");
    console.log(result);

    res.json("Plantillas");
    
};