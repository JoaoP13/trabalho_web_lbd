import { Model } from 'sequelize';

interface AlunoAttributes {
    cpf_aluno: string;
    id_curso: number;
    id_tcc: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Aluno extends Model<AlunoAttributes>
        implements AlunoAttributes {
        cpf_aluno!: string;
        id_curso!: number;
        id_tcc!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Aluno.belongsTo(models.Pessoa);
            Aluno.belongsTo(models.Curso, {
                foreignKey: 'id_curso',
                as: 'curso'
            });
            Aluno.belongsToMany(models.AlunoOrientador, {
                foreignKey: 'cpf_aluno',
                through: 'AlunoOrientador'
            });
        }
    }

    Aluno.init({
        cpf_aluno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        id_curso: {
            type: DataTypes.INTEGER,
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
        modelName: 'Aluno',
        freezeTableName: true
    });
    return Aluno;
};
