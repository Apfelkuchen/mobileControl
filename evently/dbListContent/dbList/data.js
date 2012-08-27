function(e, controldevice, database) {
	$.log("dbListcontent/dbList/data.js");
	$("#dbListDevice").text(controldevice+" - "+database);
	var devicelist = [];
	for (device in $DevicesList[controldevice][database]) {
		var subdevicelist = [];
		for (subdevice in $DevicesList[controldevice][database][device]) {
			subdevicelist.push({"subdevicename" : subdevice, "devicename" : device});
		}
		devicelist.push({"devicename" : device, "subdevices" : subdevicelist});
	}
	return { devices : devicelist, controldevice : controldevice, database : database};
}
