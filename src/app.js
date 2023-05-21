import express  from "express";
import rolesRoutes from './routes/roles.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
const app = express();


//middlewares
app.use(express.json());


app.use(rolesRoutes);
app.use(usuariosRoutes);

export default app;
