import { Model } from 'sequelize';

interface TCCAttributes {
    id: string;
    tema: string;
    data_entrega: Date;
    id_banca_avaliadora: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class TCC extends Model<TCCAttributes>
        implements TCCAttributes {
        id!: string;
        tema!: string;
        data_entrega!: Date;
        id_banca_avaliadora!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        // static associate(models: any) {
        //     Aluno.belongsTo(models.Delivery, {
        //         foreignKey: 'id_delivery',
        //         as: 'delivery'
        //     });

        //     Aluno.belongsTo(models.User, {
        //         foreignKey: 'id_user',
        //         as: 'user'
        //     });
        // }
    }

    TCC.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_entrega: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_banca_avaliadora: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'TCC',
        freezeTableName: true
    });
    return TCC;
};
