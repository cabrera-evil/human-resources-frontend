import axios from "axios";
import { ApiResponse } from "../../../models/ApiResponse.type";

export default class UserService {

    async getUsers(token: string): Promise<ApiResponse> {
        try {
            const res = await axios.get(`users/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data;
        } catch (error: any) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            return errorMessage;
        }
    }

    // async updateUser(token: string, id: string, data: User): Promise<ApiResponse> {
    //     try {
    //         const res = await axios.patch(`users/${id}`, {
    //             id: data._id,
    //             username: data.username,
    //             rol: data.role
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });

    //         return res.data;
    //     } catch (error: any) {
    //         return {
    //             statusCode: error.response ? error.response.status : 500,
    //             message: 'Internal Server Error',
    //             data: { error: error.response ? error.response.data.message : error.message }
    //         };
    //     }
    // }

    // async deleteUser(token: string, id: string): Promise<ApiResponse> {
    //     try {
    //         const res = await axios.delete(`users/${id}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });

    //         return res.data;
    //     } catch (error: any) {
    //         return {
    //             statusCode: error.response ? error.response.status : 500,
    //             message: 'Internal Server Error',
    //             data: { error: error.response ? error.response.data.message : error.message }
    //         };
    //     }
    // }
}