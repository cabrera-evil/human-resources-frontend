import axios from "axios";
import { ApiResponse } from "../../../models/ApiResponse.type";

export default class RoleService {

    async getRoles(token: string): Promise<ApiResponse> {
        try {
            const res = await axios.get(`roles/`, {
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