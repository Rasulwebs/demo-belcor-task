import React from 'react';
import styled from "./styleResultsPage.module.css"
import { Button, Table } from 'antd';
import { TableColumn } from './components/TableColumn/TableColumn';
import { useQuery } from 'react-query';
import { AuthService } from '@/services/auth.service';
import { addNotificationAxios } from '@/utils/addNotification';
import { useNavigate } from 'react-router-dom';
export const Results = () => {
    const navigate = useNavigate()
    const { data: allUsers, isLoading: getAllUsersLoading } = useQuery({
        queryKey: ["getAllUSers"],
        queryFn: () => AuthService.getAllUsers(),
        onError: addNotificationAxios,
    });
    console.log(allUsers)
    return (
        <div>
            <Button onClick={() => navigate("/")}>Home</Button>

            <hr style={{ margin: "20px 0 20px 0" }} />
            <Table columns={TableColumn}
                dataSource={allUsers || []}
                loading={getAllUsersLoading}>

            </Table>
        </div>
    );
};
