import { Model } from 'sequelize';

interface PessoaAttributes {
    cpf_pessoa: string;
    email: string;
    nome: string;
    e_convidado: boolean;
    telefone: string;
    data_nascimento: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Pessoa extends Model<PessoaAttributes>
        implements PessoaAttributes {
        cpf_pessoa!: string;
        email!: string;
        nome!: string;
        e_convidado!: boolean;
        telefone!: string;
        data_nascimento!: Date;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Pessoa.hasOne(models.Professor, {
                foreignKey: 'cpf_professor',
                as: 'professor'
            });

            Pessoa.hasOne(models.Aluno, {
                foreignKey: 'cpf_aluno',
                as: 'aluno'
            });

            Pessoa.hasOne(models.Avaliador, {
                foreignKey: 'cpf_avaliador',
                as: 'avaliador'
            });
        }
    }

    Pessoa.init({
        cpf_pessoa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        e_convidado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        data_nascimento: {
            type: DataTypes.DATE,
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
        modelName: 'Pessoa',
        freezeTableName: true
    });
    return Pessoa;
};
