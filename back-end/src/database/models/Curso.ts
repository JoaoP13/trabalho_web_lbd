import { Model } from 'sequelize';

interface CursoAttributes {
    id: number;
    nome: string;
    carga_horaria: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Curso extends Model<CursoAttributes>
        implements CursoAttributes {
        id!: number;
        nome!: string;
        carga_horaria!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Curso.hasMany(models.Aluno, {
                foreignKey: 'id',
                as: 'aluno'
            });
        }
    }

    Curso.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carga_horaria: {
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
        modelName: 'Curso',
        freezeTableName: true
    });
    return Curso;
};
