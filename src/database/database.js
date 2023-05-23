import Sequelize from 'sequelize';

export const sequelize = new Sequelize('ejemplo1','postgres','1234',{
host:'localhost',
dialect:'postgres'
});