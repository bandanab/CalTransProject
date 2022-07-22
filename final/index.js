const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const loadBtn = document.querySelectorAll("form .load-btn");
const form = document.querySelector("form");
const addBtn = document.querySelectorAll("form .add-btn");
const addBtn2 = document.querySelectorAll("form .add-btn2");
var ids =  document.querySelectorAll('*[id]');

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    Save();
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});
loadBtn.forEach((button) => {
  button.addEventListener("click", () => {
    checkToLoad();
  });
});
addBtn.forEach((button) => {
  button.addEventListener("click", () => {
    saveAndRemoveAdmin();
  });
});

addBtn2.forEach((button) => {
  button.addEventListener("click", () => {
    saveAndRemoveBMP();
  });
});


/*
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset(); 
});  */

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");

}
function saveData() {
  var project = new Object();

  project.projName = document.getElementById("projectName").value;
	project.contract = document.getElementById("contract").value;
	project.wdid = document.getElementById("wdid").value;
	project.district = document.getElementById("District").value;

	localStorage.setItem("projStor",JSON.stringify(project));

  //console.log("hello",project.projName);

 }

 function Save(){
  var project = new Object();
  var idAmount = ids.length;
  var thisProjectName = document.getElementById("contract").value;
  console.log(thisProjectName);
  for(i = 0; i < idAmount;i++){
    var saveName = ids[i].id
    var data = document.getElementById(saveName).value;
    project[saveName] = data;

  }
  localStorage.setItem([thisProjectName],JSON.stringify(project));
}

function checkToLoad(){
  var thisProjectName = document.getElementById("contract").value;
  var found = false;
  var projectObject = JSON.parse(localStorage.getItem(thisProjectName));
  
  if(projectObject == null){
    console.log("NOT FOUND");
  }
  else{
    var idAmount = ids.length;
    for(i = 0; i < idAmount;i++){
      var propertyName = ids[i].id
      document.getElementById(propertyName).value = projectObject[propertyName];
    }  
  }
}

function saveAndRemove(){
  var elementToSave = "projectName"; //replace with what will be saved
  document.getElementById(elementToSave).value = "";
}


/*  GARY TESTING CASCADE DROP DOWNS   */

var subjectObject = {
  "Soil Stabiliziation": {
    "SS-1: Scheduling ": ["SS-1.1 Are BMPs appropriately scheduled to prevent or reduce runoff?"],
    "SS-2: Preservation of Property/Existing Vegitation ": ["SS-2.1 Is existing vegitation appropriately preserved?", 
                                                            "SS-2.2 Is preservation of Existing Vegitation maintained correctly?"],
    "SS-3: Hydraulic Mulch ": ["SS-3.1 Is the hydraulic mulch used for the correct application?",
                                "SS-3.2 Is the hydraulic mulch installed correctly?",
                                "SS-3.3 Is the hydraulic mulch made of the correct materials?",
                                "SS-3.4 Is the hydraulic mulch maintained correctly?"],
    "SS-4: Hydroseeding ": ["SS-4.1 Is the hydroseeding used for the correct application?",
                            "SS-4.2 Is the hydroseeding applied correctly?",
                            "SS-4.3 Are hydroseeding materials appropriate?",
                            "SS-4.4 Is the hydroseeding maintained correctly?"],
    "SS-5: Soil Binding ": ["SS-5.1 Is the Soil Binders used for the correct application?",
                            "SS-5.2 Is the Soil Binders installed correctly?",
                            "SS-5.3 Are Soil Binders made of the correct materials?",
                            "SS-5.4 Is the Soil Binders maintained correctly?"],
    "SS-6: Straw Mulch ": ["SS-6.1 Is the Straw Mulch used for the correct applicaiton?",
                           "SS-6.2 Is the Straw Mulch installed correctly?",
                           "SS-6.3 Is the Straw Mulch made of the correct material?",
                           "SS-6.4 Is the Straw Mulch maintained correctly?"],
    "SS-7: Geotextiles, Plastic Covers, Erosion Control Blankets/Mats ": ["SS-7.1 Geotextiles, Plastic Covers, Erosion Control Blankets/Mats used for the correct application?",
                                                                          "SS-7.2 Geotextiles, Plastic Covers, Erosion Control Blankets/Mats installed correectly?",
                                                                          "SS-7.3 Geotextiles, Plastic Covers, Erosion Control Blankets/Mats made of the correct materials?",
                                                                          "SS-7.4 Geotextiles, Plastic Covers, Erosion Control Blankets/Mats maintained correctly?"],
    "SS-8: Wood Mulching ": ["SS-8.1 Is the Wood Mulching used for the correct application?",
                             "SS-8.2 Is the Wood Mulching installed correctly?",
                             "SS-8.3 Is the Wood Mulching madse of the correct material?",
                             "SS-8.4 Is the Wood Mulching maintained correctly?"],
    "SS-9: Earth Dikes/Drainage Swales Lined Swales ": ["SS-9.1 Are the Earth Dikes, Drainage/Lined Swales, Lined Ditches used for the correct application?",
                                                        "SS-9.2 Are the Are the Earth Dikes, Drainage/Lined Swales, Lined Ditches installed correctly?",
                                                        "SS-9.3 Are the Are the Earth Dikes, Drainage/Lined Swales, Lined Ditches made of the correct materials?",
                                                        "SS-9.4 Are the Are the Earth Dikes, Drainage/Lined Swales, Lined Ditches maintained correctly?"],
    "SS-10: Outlet Protection/Velocity Dissipation Devices ": ["SS-9.1 Are the Outlet Protection/Velocity Dissipation Devices used for the correct application?",
                                                              "SS-10.2 Are the Are the Outlet Protection/Velocity Dissipation Devices installed correctly?",
                                                              "SS-10.3 Are the Are the Outlet Protection/Velocity Dissipation Devices made of the correct materials?",
                                                              "SS-10.4 Are the Are the Outlet Protection/Velocity Dissipation Devices maintained correctly?"],
    "SS-11: Slope Drains ": ["SS-9.1 Are the Slope used for the correct application?",
                            "SS-10.2 Are the Are the Slope installed correctly?",
                            "SS-10.3 Are the Are the Slope made of the correct materials?",
                            "SS-10.4 Are the Are the Slope maintained correctly?"],
    "SS-12: Stream Stabiliziation ": ["SS-9.1 Are the Stream Stabiliziation used for the correct application?",
                                      "SS-10.2 Are the Are the Stream Stabiliziation installed correctly?",
                                      "SS-10.3 Are the Are the Stream Stabiliziation made of the correct materials?",
                                      "SS-10.4 Are the Are the Stream Stabiliziation maintained correctly?"],
  },

  "Sediment Control": {
    "SC-1: Temporary Silt Fence ":	["SC-1.1: Is The Temporary Silt Fence used for the correction application?",
                                  	"SC-1.2: Is the Temporary Silt Fence installed correctly?",
                                        "SC-1.3: Is the Temporary Reinforced Silt Fence installed correctly?",
                                       	 "SC-1.4: Does the Temporary Silt Fence consist of the correct materials(fabric, posts)?",
					"SC-1.5: Does the Temporary Reinforced Silt Fence consist of the correct materials(fabric, posts)?",
					"SC-1.6: Is the Temporary Silt Fence of Temporary Reinforce Silt Fence maintained correctly?"],
    "SC-2: Temporary Sediment Basin ": 	["SC-2.1: Is the Sediment Basin installed correctly?", 
                                       	"SC-2.2: Is Sediment Basin maintained correctly?"],
    "SC-3: Temporary Sediment Trap ": 	["SC-3.1: Is the Sediment Trap applied properly?", 
                                       	"SC-3.2: Is the Sediment Trap maintained correctly?"],
    "SC-4: Temporary Check Dam ": 	["SC-4.1:Are the Check Dams used for the correct application?",
                                  	"SC-4.2: If fiber rolls are used as Check Dams, is a Type 2 temporary check dam installed correctly?",
                                        "SC-4.3: If grave-filled bags are used as Check Dams, is a Type 2 temporary check dam installed correctly?",
                                        "SC-4.4: Are the Check Dams made of the correct materials?",
					"SC-4.5: Are the Check Dams maintained correctly?"],
    "SC-5: Temporary Fiber Rolls ": 	["SC-5.1: Are the Fiber Rolls used for the correct application(temporary check dam, temporary drainage inlet protection, temporary linear barrier, large sediment barrier)?",
                                  	"SC-5.2: Are the Fiber Rolls properly installed correctly?",
                                        "SC-5.3: Are the Fiber Rolls anchored correctly?",
                                        "SC-5.4: Are the Fiber Rolls made of the correct material?",
					"SC-5.5: Are the Fiber Rolls maintained correctly?"],
    "SC-6: Temporary Gravel Bag Berm ": ["SC-6.1: Is the Gravel Bag Berm installed correctly?",
                                  	"SC-6.2: Is the Gravel Bag Berm made of the correct materials?",
					"SC-6.3: Is the Gravel Bag Barm maintained correctly?"],
    "SC-7: Street Sweeping ": 		["SC-7.1: Are the streets swept to prevent unauthorized non-storm water discharges from reaching surface water or MS4 drainage systems?",
                                  	"SC-7.2: If street sweeping is required, is a street sweeper available at all times?",
					"SC-7.3: Is the sediment collected and disposed on the job site proected against erosion?"],
    "SC-8: Temporary Sandbag Barrier ": ["SC-8.1: Is the Sandbag Barrier Installed correctly?",
					"SC-8.2: Is the Sandbag Barrier maintained correctly?"],
    "SC-9: Temporary Straw Bale Barrier ": ["SC-9.1: Is the Straw Bale Barrier Installed correctly?",
					"SC-9.2: Is the Straw Bale Barrier maintained correctly?"],
    "SC-10: Temporary Drain Inlet Protection ": ["SC-10.1: Is the Drainage Inlet Protection used for the correct application(Type 1, 2 , 3A, 3B, 4A, 4B, 5, 6A or 6B)?",
                                         "SC-10.2: Is the Drainage Inlet Protection installed correctly (Type 1, 2 , 3A, 3B, 4A, 4B, 5, 6A or 6B)?",
                                         "SC-10.3: Is the Drainage Inlet Protection made of the correct materials(gravel-filled bag, rigid plastic barrier, sediment filler bag, foam barrier, gravel-filled bag berm, erosion control blanket, linear barrier)?",
                                         "SC-10.4: Is the Drainage Inlet Protection maintained correctly?"],
  },
  "Tracking Control": {
    "TC-1: Temporary Construction Entrance":["TC-1.1: Is the Temporary Construction Entrance used for the correct application?",
    					       "TC-1.2: Is the Temporary Construction Entrance installed correctly?",
    					       "TC-1.3: Does the Temporary Construction Entrance consist of the correct materials(Type 1 or Type2)?",
   					       "TC-1.4: Is the Temporary Construction Entrance maintained correctly?"],
    "TC-2: Stabilized Construction Roadway":["TC-2.1: Is the Temporary Construction Roadway used for the correct application?",
					     "TC-2.2: Is the Temporary Construction Roadway installed correctly?",
					     "TC-2.3: Does the Temporary Construction Roadway consist of the correct materials?",
					     "TC-2.4: Is the Temporary Construction Roadway maintained correctly?"],
    "TC-3:Temporary Entrance/Outlet Tire Wash": ["TC-3.1: Is the Entrance/Outlet Tire Wash used for the correct application?",
						 "TC-3.2: Is the Entrance/Outlet Tire Wash installed correctly?",
						 "TC-3.3: Does the Entrance/Outlet Tire Wash consist of the correct materials/equipment?",
						 "TC-3.4: Is the Entrance/Outlet Tire Wash maintained correctly?"],
},
"Wind Erosion Control": {
    "WE-1: Wind Erosion Control": ["WE-1.1: Is Wind Erosion Control implementated for active and inactive stockpiles subject to wind erosion?",
                                   "WE-1.2: Is Wind Erosion Control installed correctly?",
                                   "WE-1.3: Are materials used for Wind Erosion Control correct?",
                                   "WE-1.4: Is Wind Erosion Control maintained correctly?"]

    

  },
  "Non-Storm Water":{
    "NS-1:Water Control and Conservation":  ["NS-1.1: Are the Water Conservation Practices being applied correctly?",
                                             "NS-1.2: Are the Water Conservation Practices implemented correctly?",
                                             "NS-1.3: Are hoses equipped with positive shutoff valve?"],
    "NS-2:Dewatering":  ["NS-2.1: Are Dewatering Operations being applied to control non-storm water discharges during construction?",
                         "NS-2.2: Are Dewatering Operations being implemented correctly?",
                         "NS-2.3: Are Dewatering Operations being maintained correctly?"],
    "NS-3:Paving, Sealing, Sawcutting, and Grinding Operations":  ["NS-3.1: Are paving and Grinding Operations being correctly applied to control non-storm water discharges during construction?",
                                                                   "NS-3.2: Are paving and Grinding Operations implemented correctly (stockpile management, paving/sealing/sawcutting/grooving/grinding, thermoplastic striping and pavement markers, air pollution control, dust control)?",
                                                                   "NS-3.3: Are linear sediment carriers and covers repaired or replaced to keep them functioning properly?",
                                                                   "NS-3.4: Has sediment accumulated to 1/3 of the linear barrier height removed?"],
    "NS-4:Temporary Stream Crossing":  ["NS-4.1: Is the Temporary Stream Crossing appropriately applied?",
                                        "NS-4.2: Is the Temporary Stream Crossing implemented correctly?",
                                        "NS-4.3: Is the Temporary Stream Crossing maintained correctly?"],
    "NS-5:Clean Water Diversion":  ["NS-5.1: Is the Clean Water Diversion appropriately applied?",
                                    "NS-5.2: Is the Clean Water Diversion implemented correctly?",
                                    "NS-5.3: Is the Clean Water Diversion maintained correctly?"],    
    "NS-6:Temporary Stream Crossing":  ["NS-6.1: Are there any instances of an observed illicit Connection or illegal Discharge during the field BMP review?"],
    "NS-7:Potable Water/Irrigation":  ["NS-7.1: Is the Potable Water/Irrigation BMP correctly applied to control non-storm water discharges during construction?",
                                       "NS-7.2: Is the Potable Water/Irrigation BMP implemented correctly?",
                                       "NS-7.3: Is the Potable Water/Irrigation BMP maintained correctly?"],   
    "NS-8:Vehicle and Equipment Cleaning":  ["NS-8.1: Are Vehicle and Equipment Cleaning processes correctly applied to control non-storm water discharges during construction?",
                                             "NS-8.2: Is Vehicle and Equipment Cleaning performed at least 100 feet from concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized?",
                                             "NS-8.3: Are Vehicle and Equipment Cleaning processes implemented correctly?",
                                             "NS-8.4: Is Vehicle and Equipment Cleaning performed in a structure equipped with disposal facilities?",
                                             "NS-8.5: Are Vehicle and Equipment Cleaning materials and tools maintained correctly?"],
    "NS-9:Vehicle and Equipment Fueling":  ["NS-9.1: Is the Vehicle and Equipment Fueling being correctly applied to control non-storm water discharges during construction?",
                                            "NS-9.2: Is the fueling of vehicles and equipment performed at least 100 feet form concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized?",
                                            "NS-9.3: Are fuels in water tight containers (with appropriate secondary containment to prevent any spillage or leakage) or in a storage shed (completely enclosed)?",
                                            "NS-9.4: Is Vehicle and Equipment Fueling implemented correctly?",
                                            "NS-9.5: Are Vehicle and Equipment Fueling maintained correctly?"],
    "NS-10:Vehicle and Equipment Maintenance":  ["NS-10.1: Is Vehicle and Equipment Maintenance correctly applied to control non-storm water discharges during construction?",
                                                "NS-10.2: Is Vehicle and Equipment Maintenance performed at least 100 feet form concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized?",
                                                "NS-10.3: Are oil, grease, and fuel prevented from leaking on to the ground,storm drains or surface water?",
                                                "NS-10.4: Is Vehicle and Equipment Maintenance implemented correctly?",
                                                "NS-10.5: Are Vehicle and Equipment Maintenance materials and tools maintained correctly?"],
    "NS-11:Pile Driving Operations":  ["NS-11.1: Are Pile Driving Operations BMPs correctly applied to control non-storm water discharges during construction?",
                                       "NS-11.2: Are Pile Driving equipment and liquid waste containers being stored at least 100 feet form concentrated flows of stormwater drainage courses, and inlets if within the floodplain and at least 50 feet if outside the floodplain, unless otherwise authorized?",
                                       "NS-11.3: Are Pile Driving Operations being conducted correctly?",
                                       "NS-11.4: Are Pile Driving Operations implemented correctly?",
                                       "NS-11.5: Are Pile Driving Operations maintained correctly?"],
    "NS-12:Concrete Curing":  ["NS-12.1: Is Concrete Curing correctly applied to control non-storm water discharges during construction",
                               "NS-12.2: Is Concrete Curing overspray controlled?",
                               "NS-12.3: Is Concrete Curing implemented correctly?",
                               "NS-12.4: Are Maintenance procedures correctly performed during Concrete Curing?"],
    "NS-13:Material and Equipment Use Over Water":  ["NS-13.1: Is Material and Equipment Use Over Water applied to control non-storm water discharges during construction",
                                                     "NS-13.2: Are spill kits and cleanup materials present or kept on hand?",
                                                     "NS-13.3: Is Material and Equipment Use Over Water implemented correctly?",
                                                     "NS-13.4: Are measures used for Material and Equipment Use Over Water maintained correctly?"],
    "NS-14:Concrete Finishing":  ["NS-14.1: Are Concrete Finishing BMP processes applied correctly to control non-storm water discharges during construction",
                                  "NS-14.2: Are Concrete Finishing processes implemented correctly?",
                                  "NS-14.3: Is equipment used in Concrete Finishing maintained correctly?"],
    "NS-15:Structure Demolition/Removal Over or Adjacent to Water":  ["NS-15.1: Is the Structure Demolition/Removal near Water BMP applied correctly to control non-storm water discharges during construction",
                                                                      "NS-15.2: Are demolished materials prevented from entering storm drain systems and receiving waters?",
                                                                      "NS-15.3: Are attachments on equipment used to catch debris during small demolition activities?",
                                                                      "NS-15.4: Is Structure Demolition/Removal Near Water implemented correctly?",
                                                                      "NS-15.5: Is Structure Demolition/Removal Near Water maintained correctly?"],
},   
"Waste Management": {
    "WM-1: Material Delivery and Storage": ["WM-1.1: Are materials delivered and stored correctly?",
                                            "WM-1.2: Are Material Delivery and Storage Areas correctly installed?",
                                            "WM-1.3: Are Material Delivery and Storage Areas maintained correctly?"],
    "WM-2: Material Use": ["WM-2.1: Are Materials used correctly?"],
    "WM-3: Stockpile Management": ["WM-3.1: Are stockpiles at least 100 feet from concentrated flows of stormwater, drainage courses, and inlets if within the floodplain (at least 50 feet if outside the floodplain) unless otherwise authorized?",
                                   "WM-3.2: Are Stockpiles properly protected?",
                                   "WM-3.3: Are the correct materials used to protect stockpiles?",
                                   "WM-3.4: Is stockpile protection maintained correctly?"],
    "WM-4: Spill Prevention and Control": ["WM-4.1: Are Spill Prevention and Control measures correctly selected?",
                                           "WM-4.2: Are Spill Prevention and Control measures correctly implemented?"],
    "WM-5: Solid Waste Management": ["WM-5.1: Are Solid Waste Management measures correctly selected?",
                                     "WM-5.2: Are Solid Waste Management measures correctly implemented?"],
    "WM-6: Hazardous Waste Management": ["WM-6.1: Are Hazardous Waste Management control measures correctly selected?",
                                         "WM-6.2: Are Hazardous Waste Management control measures correctly implemented?"],
    "WM-7: Contaminated Soil Management": ["WM-7.1: Are Contaminated Soil Management measures correctly selected and applied?"],
    "WM-8: Concrete Waste Management/Temporary Concrete Washout Facility/Temporary Concrete Washout Portable": ["WM-8.1: Is Concrete Waste Management applied correctly?",
                                                                                                                "WM-8.2: Is Concrete Waste Management implemented correctly?",
                                                                                                                "WM-8.3: Are materials used for Concrete Waste Management correct?"],
    "WM-9: Sanitary/Septic Waste Management": ["WM-9.1: Is the Sanitary/Septic Waste Management properly located?",
                                               "WM-9.2: Is the Sanitary/Septic Waste Management correctly installed?",
                                               "WM-9.3: Is Sanitary/Septic Waste Management correctly maintained"],
    "WM-10: Liquid Waste Maintenance": ["WM-10.1: Is Liquid Waste Management correctly applied?",
                                        "WM-10.2: Is Liquid Waste Management correctly implemented?",
                                        "WM-10.3: Are materials used for Liquid Waste Management correct?",
                                        "WM-10.4: Is Liquid Waste Management properly maintained?"],

    

  },
  
  "Back-end": {
    "PHP": ["Variables", "Strings", "Arrays"],
    "SQL": ["SELECT", "UPDATE", "DELETE"]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}