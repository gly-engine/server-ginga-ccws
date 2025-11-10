import os from "os";
import { createHash } from "crypto"

export function GetMacAddress() {
    const nullMacAddress = "00:00:00:00:00:00";
    const iface = Object.values(os.networkInterfaces())
        .filter((list): list is os.NetworkInterfaceInfo[] => Array.isArray(list))
        .flatMap(list => list)
        .find(iface => !iface.internal && iface.mac && iface.mac !== nullMacAddress);

    return (iface?.mac ?? nullMacAddress).toLowerCase();
}

export function GetSerialNumber() {
    const mac = GetMacAddress()
    const md5Buffer = createHash("md5").update(mac, "utf8").digest();
    const b64 = md5Buffer.toString("base64"); 
    const map = { "+": "p", "/": "s", "=": "" };
    return b64.replace(/[+/=]/g, ch => map[ch] ?? ch);
}
