import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660681207487 implements MigrationInterface {
    name = 'default1660681207487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`room\` ADD \`description\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`room\` DROP COLUMN \`description\``);
    }

}
