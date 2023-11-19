import axios from "axios";
import { ApiResponse } from "../../../models/ApiResponse.type";

export default class DepartmentService {

    async getDepartments(token: string): Promise<ApiResponse> {
        try {
            const res = await axios.get(`departments/`, {
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
}