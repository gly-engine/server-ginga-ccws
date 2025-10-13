import os from "os";

export function GetMacAddress() {
    const nullMacAddress = "00:00:00:00:00:00";
    const iface = Object.values(os.networkInterfaces())
        .filter((list): list is os.NetworkInterfaceInfo[] => Array.isArray(list))
        .flatMap(list => list)
        .find(iface => !iface.internal && iface.mac && iface.mac !== nullMacAddress);

    return (iface?.mac ?? nullMacAddress).toLowerCase();
}
