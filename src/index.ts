import colors from "colors";
import server from "./server";

const port = process.env.SERVER_PORT || 3000;

server.listen(port, () => {
    console.log(colors.cyan.bold(`Server is running on port ${port}`));
});