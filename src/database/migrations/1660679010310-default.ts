import { MigrationInterface, QueryRunner } from "typeorm";

export class default1660679010310 implements MigrationInterface {
    name = 'default1660679010310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`video\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tittle\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`room_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`video\` ADD CONSTRAINT \`FK_9a24a59d61b0388afae750b54e3\` FOREIGN KEY (\`room_id\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_9a24a59d61b0388afae750b54e3\``);
        await queryRunner.query(`DROP TABLE \`room\``);
        await queryRunner.query(`DROP TABLE \`video\``);
    }

}
