create table user_info
(
    id        int auto_increment
        primary key,
    user_name varchar(255) not null,
    user_pwd  varchar(255) not null
);

INSERT INTO micro.user_info (id, user_name, user_pwd) VALUES (3, 'admin', 'admin');
INSERT INTO micro.user_info (id, user_name, user_pwd) VALUES (4, 'guest', 'guest');