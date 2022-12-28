CREATE USER kludwig WITH
	LOGIN
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'kiti4313';

CREATE DATABASE wedding
    WITH
    OWNER = kludwig
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE wedding TO kludwig;

GRANT TEMPORARY, CONNECT ON DATABASE wedding TO PUBLIC;
-- INSERT INTO gast (voornaam, achternaam) VALUES ('Test1', 'Test1');
-- INSERT INTO gast (voornaam, achternaam) VALUES ('Test2', 'Test2');
-- INSERT INTO gast (voornaam, achternaam) VALUES ('Test3', 'Test3');
