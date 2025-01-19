import { DataTypes } from "sequelize";
import { Model, Table, Column, DataType, PrimaryKey, Default, } from "sequelize-typescript";
import { v4 } from "uuid";

@Table({
    tableName: "games",
    timestamps: false,
})
export class Games extends Model {

    @PrimaryKey
    @Default(v4)
    @Column({
        type: DataType.UUID
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    desc!: string;

    @Column({
        type: DataTypes.JSON,
        allowNull: true
    })
    platforms!: string[];

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    developer!: string;

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    publisher!: string;

    @Column({
        type: DataTypes.JSON,
        allowNull: true
    })
    genres!: string[];

    @Column({
        type: DataTypes.JSON,
        allowNull: true
    })
    gameModes!: string[];

    @Column({
        type: DataType.STRING(64),
        allowNull: true
    })
    engine!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    coverImgPath!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    ytbTrailerLink!: string;
}