import Sequelize from 'sequelize';

export const sequelize = new Sequelize('Ejemplo1','postgres','1234',{
host:'localhost',
dialect:'postgres'
});