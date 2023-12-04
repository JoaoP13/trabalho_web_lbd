import { Model } from 'sequelize';

interface ComentarioAttributes {
    id: string;
    comentario: string;
    id_tcc: number;
    cpf_avaliador: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Comentario extends Model<ComentarioAttributes>
        implements ComentarioAttributes {
        id!: string;
        comentario!: string;
        id_tcc!: number;
        cpf_avaliador!: string;
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

    Comentario.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'Comentario',
        freezeTableName: true
    });
    return Comentario;
};
