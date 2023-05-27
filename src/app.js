import express  from "express";
import rolesRoutes from './routes/roles.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import cupones_descRoutes from './routes/cupones_desc.routes.js';
import cupones_usuariosRoutes from './routes/cupones_usuarios.routes.js';
import vendedoresRoutes from './routes/vendedores.routes.js';
import categoriasRoutes from './routes/categorias_p.routes.js';
import productosRoutes from './routes/productos.routes.js';
import metodopagoRoutes from './routes/metodos_pago.routes.js';
import ordendecompraRoutes from './routes/ordenes_de_compra.routes.js';
import ticketsRoutes from './routes/ticket.routes.js';
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middlewares
app.use(express.json());

app.use(rolesRoutes);
app.use(usuariosRoutes);
app.use(cupones_descRoutes);
app.use(cupones_usuariosRoutes);
app.use(vendedoresRoutes);
app.use(categoriasRoutes);
app.use(productosRoutes);
app.use(metodopagoRoutes);
app.use(ordendecompraRoutes);
app.use(ticketsRoutes);
export default app;
