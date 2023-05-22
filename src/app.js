import express  from "express";
import rolesRoutes from './routes/roles.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import cupones_descRoutes from './routes/cupones_desc.routes.js';
import cupones_usuariosRoutes from './routes/cupones_usuarios.routes.js';
import vendedoresRoutes from './routes/vendedores.routes.js';
import categoriasRoutes from './routes/categorias_p.routes.js';
import productosRoutes from './routes/productos.routes.js';
const app = express();


//middlewares
app.use(express.json());

app.use(rolesRoutes);
app.use(usuariosRoutes);
app.use(cupones_descRoutes);
app.use(cupones_usuariosRoutes);
app.use(vendedoresRoutes);
app.use(categoriasRoutes);
app.use(productosRoutes);

export default app;
