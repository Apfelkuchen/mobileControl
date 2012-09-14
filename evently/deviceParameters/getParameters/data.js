function(data,e, controldevicename,databasename,devicename,subdevicename) {
	$("#deviceName").text(controldevicename+" - "+databasename+" - "+devicename+" - "+subdevicename);
	if(controldevicename=='Labjacks') {
		controldocname = 'ControlDoc';
	}
	if(controldevicename=='DataGenerators') {
		controldocname = 'Parameter';
	}
	var parameterlist = [];
	if(data['updatefrequency'] != undefined || data[devicename] != undefined && data[devicename][subdevicename]!=undefined) {
		if(data[devicename] != undefined && data[devicename][subdevicename]!=undefined) {
			for(i in data[devicename][subdevicename]) {
						if(i !='voltage') {
							parameterlist.push({'parameter' : i, 'value' : data[devicename][subdevicename][i],'subdevicename' : subdevicename, 'devicename' : devicename});
						}
						if(i == 'voltage') {
							parameterlist.push({'voltage' : 'yes', 'parameter' : i, 'value' : data[devicename][subdevicename][i],'subdevicename' : subdevicename, 'devicename' : devicename});
						}
		}}
		if(data['updatefrequency'] != undefined) {
			parameterlist.push({ 'parameter' : 'updatefrequency', 'value' : data['updatefrequency']});
		}				
		return { parameters : parameterlist, controldevicename : controldevicename, databasename : databasename, devicename2 : devicename, subdevicename2 : subdevicename, doc : JSON.stringify(data), ControlDocName : controldocname};
	}
	else {
		$("#deviceParameters").html("<div data-role='collapsible' data-collapsed='false''> <h3>Parameters</h3><p> No parameters found</p></div>");
		$("#deviceParameters").trigger("create");
		return;
	}
}
