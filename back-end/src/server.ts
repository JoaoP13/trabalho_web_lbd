import app from "./app";
import * as database from './database/index'

const port = process.env.PORT || 3008;

database.default.auth();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});