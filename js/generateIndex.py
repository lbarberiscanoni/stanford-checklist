import json

base_ob = {
    "diagnosis_name": "",
    "location": "",
    "signs": "",
    "immediate": "",
    "secondary": "",
    "details": "",
    "check": "",
    "consider": "",
    "rule-out": "",
    "post-event": ""
}

sections = ["Asystole", "Bradycardia - Unstable", "PEA", "SVT - Stable Tachycardia", "SVT - Unstable Tachycardia", "VF/VT", "Hypotension", "Hypoxemia", "Amniotic Fluid Embolism", "Anaphylaxis", "Bradycardia - Unstable", "Bronchospasm", "Delayed Emergence", "Difficult Airway - Unanticipated", "Fire - Airway", "Fire - Patient", "Hemorrhage - MTG", "Hypotension", "Hypoxemia", "Local Anesthetic Toxicity", "Malignant Hyperthermia", "Myocardial Ischemia", "Oxygen Failure", "PEA", "Pneumothorax", "Power Failure", "SVT - Stable Tachycardia", "SVT - Unstable Tachycardia", "Total Spinal Anesthesia", "Transfusion Reaction", "Venous Air Embolus", "VF/VT", "Phone List"]

ob_list = []
for section in sections:
    internal_ob = base_ob
    internal_ob["diagnosis_name"] = section
    internal_ob["location"] = section.lower().replace(" ", "_")
    ob_list.append(json.dumps(internal_ob))

for ob in ob_list:
    print ob

with open("js/configuration.json", "rw+") as file:
    file.write(json.dumps(ob_list))
    file.close() 
