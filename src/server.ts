import express from "express";
import { userRoutes } from "./routes/user.routes";
import { eventRoutes } from "./routes/events.routes";
 

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(eventRoutes);


app.listen(3333, () => console.log("Será que está funcionando?"))

