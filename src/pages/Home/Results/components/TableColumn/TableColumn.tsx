import { UserTypes } from "@/types/userTypes";
import { ColumnType } from "antd/es/table";

export const TableColumn: ColumnType<UserTypes.UserAdditionalInfoType>[] = [
    {
        key: 'index',
        dataIndex: 'index',
        title: '#',
        align: 'center',
        render: (value, record, index) => index + 1,
    },
    {
        key: 'username',
        dataIndex: 'index',
        title: 'username',
        align: 'center',
        render: (value, record, index) => <span>{record?.username}</span>,
    },
    {
        key: 'email',
        dataIndex: 'index',
        title: 'email',
        align: 'center',
        render: (value, record, index) => <span>{record?.email}</span>,
    },
    {
        key: 'correctAnswers',
        dataIndex: 'index',
        title: 'correctAnswers',
        align: 'center',
        render: (value, record, index) => <span>{record?.correctAnswers}</span>,
    },

];