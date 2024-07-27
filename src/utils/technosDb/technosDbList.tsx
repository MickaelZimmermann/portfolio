import graphql from './graphql.png';
import mysql from './mysql.png';
import postgresql from './postgresql.png';

export interface Techno {
    docLink: string;
    src: string;
    name: string;
}

export const technos: Techno[] = [
    { docLink: 'https://graphql.org/learn/', src: graphql, name: 'GraphQL' },
    { docLink: 'https://dev.mysql.com/doc/', src: mysql, name: 'MySQL' },
    { docLink: 'https://www.postgresql.org/docs/current/app-psql.html', src: postgresql, name: 'PostgresQL' },
    ];

export default technos;
