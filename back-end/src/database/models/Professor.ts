import { Model } from 'sequelize';

interface ProfessorAttributes {
    cpf_professor: string;
    e_orientador: boolean;
    e_coorientador: boolean;
    graduacao: string;
    e_mestre: boolean;
    e_doutor: boolean;
    matricula: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Professor extends Model<ProfessorAttributes>
        implements ProfessorAttributes {
        cpf_professor!: string;
        e_orientador!: boolean;
        e_coorientador!: boolean;
        graduacao!: string;
        e_mestre!: boolean;
        e_doutor!: boolean;
        matricula!: string;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Professor.belongsTo(models.Pessoa);
            Professor.belongsToMany(models.AlunoOrientador, {
                foreignKey: 'cpf_professor',
                through: 'AlunoOrientador'
            });
        }
    }

    Professor.init({
        cpf_professor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        e_orientador: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        e_coorientador: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        graduacao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        e_mestre: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        e_doutor: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        matricula: {
            type: DataTypes.STRING,
            allowNull: true
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
        modelName: 'Professor',
        freezeTableName: true
    });
    return Professor;
};
