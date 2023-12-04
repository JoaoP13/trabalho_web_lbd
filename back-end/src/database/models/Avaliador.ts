import { Model } from 'sequelize';

interface AvaliadorAttributes {
    id: string;
    id_tcc: number;
    cpf_avaliador: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Avaliador extends Model<AvaliadorAttributes>
        implements AvaliadorAttributes {
        id!: string;
        id_tcc!: number;
        cpf_avaliador!: string;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Avaliador.belongsTo(models.Pessoa);
        }
    }

    Avaliador.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_tcc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cpf_avaliador: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'Avaliador',
        freezeTableName: true
    });
    return Avaliador;
};
