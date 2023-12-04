import { Model } from 'sequelize';

interface BancaAvaliadoraAttributes {
    id: number;
    data_avaliacao: Date;
    nota: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class BancaAvaliadora extends Model<BancaAvaliadoraAttributes>
        implements BancaAvaliadoraAttributes {
        id!: number;
        data_avaliacao!: Date;
        nota!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            BancaAvaliadora.belongsTo(models.Delivery, {
                foreignKey: 'id_delivery',
                as: 'delivery'
            });

            BancaAvaliadora.belongsTo(models.User, {
                foreignKey: 'id_user',
                as: 'user'
            });
        }
    }

    BancaAvaliadora.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        data_avaliacao: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nota: {
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
        modelName: 'BancaAvaliadora',
        freezeTableName: true
    });
    return BancaAvaliadora;
};
