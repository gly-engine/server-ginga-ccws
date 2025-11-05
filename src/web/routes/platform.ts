import { GetMacAddress, GetSerialNumber } from "../../infra/net";
import { HttpResponse } from "../http/response";

import type { Handler } from "../router";


export const getCapabilities: Handler = async (_req, params) => {
    return HttpResponse.json({
        platformCapabilities: {
            model: "PC",
            serialNumber: GetSerialNumber(),
            manufacturer: "DESKTOP",
            networkInterfaces: [
                {
                    macAddress: GetMacAddress()
                }
            ]
        }
    });
}
