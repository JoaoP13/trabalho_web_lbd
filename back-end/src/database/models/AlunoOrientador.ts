import { Model } from 'sequelize';

interface AlunoOrientadorAttributes {
    cpf_aluno: string;
    cpf_professor: string;
    id_tcc: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class AlunoOrientador extends Model<AlunoOrientadorAttributes>
        implements AlunoOrientadorAttributes {
        cpf_aluno!: string;
        cpf_professor!: string;
        id_tcc!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {}
    }

    AlunoOrientador.init({
        cpf_aluno: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cpf_professor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_tcc: {
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
        modelName: 'AlunoOrientador',
        freezeTableName: true
    });
    return AlunoOrientador;
};
