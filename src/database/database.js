import Sequelize from 'sequelize';

export const sequelize = new Sequelize('tienda2','leo2','pass',{
host:'localhost',
dialect:'postgres'
});
