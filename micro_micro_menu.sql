create table micro_menu
(
    id              int auto_increment
        primary key,
    name            varchar(255)  not null comment '菜单名称',
    pid             int default 0 null comment '父级id 0代表顶级菜单',
    `order`         int default 0 null comment '排序 序号越大越靠前',
    module          varchar(255)  null comment '子应用模块名称 顶级路由才需要设置',
    defaultRegister int default 0 null comment '是否默认应用 1是 0否',
    dev_entry       varchar(255)  null comment '开发环境地址',
    dep_entry       varchar(255)  null comment '生产环境地址',
    routerBase      varchar(100)  null comment '路由默认地址',
    component       varchar(255)  null comment 'vue组件地址',
    url             varchar(255)  null comment '浏览器url跳转地址',
    title           varchar(100)  null comment 'menu名称',
    icon            varchar(100)  null comment '菜单图标',
    create_time     datetime      null comment '创建时间',
    create_name     varchar(100)  null comment '创建人',
    update_time     datetime      null comment '更新时间
',
    update_name     varchar(100)  null comment '更新人',
    last_ip         varchar(16)   null comment '最后操作ip'
)
    comment '菜单表';

INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (5, '系统', 0, 100, '/system', 1, 'http://localhost:10002', null, '/system', null, null, '系统', null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (6, '菜单管理', 5, 10, '/system', 0, null, null, '/system', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (7, '角色管理', 5, 9, '/system', 0, null, null, '/system', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (8, '用户管理', 5, 8, '/system', 0, null, null, '/system', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (9, '订单', 0, 0, '/order', 0, 'http://localhost:10003', null, '/order', null, null, '订单', null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (10, '订单记录', 9, 10, '/order', 0, null, null, '/order', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (11, '订单列表', 9, 9, '/order', 0, null, null, '/order', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (12, '自定处理订单', 9, 8, '/order', 0, null, null, '/order', null, null, null, null, null, null, null, null, null);
INSERT INTO micro.micro_menu (id, name, pid, `order`, module, defaultRegister, dev_entry, dep_entry, routerBase, component, url, title, icon, create_time, create_name, update_time, update_name, last_ip) VALUES (13, '延迟发货报表', 9, 7, '/order', 0, null, null, '/order', null, null, null, null, null, null, null, null, null);