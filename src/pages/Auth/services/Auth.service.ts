import axios from "axios";
import { LoginRequest } from "../Login/models/LoginRequest.interface";
import { ApiResponse } from "../../../models/ApiResponse.type";

export default class AuthService {
    async login(data: LoginRequest): Promise<ApiResponse> {
        try {
            const res = await axios.post(`auth/login`, data);
            return res.data;
        } catch (err: any) {
            return err;
        }
    }

    async profile(token: string): Promise<ApiResponse> {
        try {
            const res = await axios.post(`auth/profile`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return res.data;
        } catch (err: any) {
            return err;
        }
    }
}