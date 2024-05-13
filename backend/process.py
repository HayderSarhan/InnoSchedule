

def pars_data(obj):
    title = obj["title"]
    start = obj["start"]
    end = obj["end"]
    extended_props = obj["extendedProps"]

    # Extracting values from extendedProps
    room = extended_props["room"]
    course = extended_props["course"]
    group = extended_props["group"]
    instructorName = extended_props["instructorName"]
    data = {"title":title,
            "start":start,
            "end":end,
            "room":room,
            "course":course,
            "group":group,
            "instructorName":instructorName
            }
    if "id" in obj:
        data = {
            "id": obj["id"],
            "title":title,
            "start":start,
            "end":end,
            "room":room,
            "course":course,
            "group":group,
            "instructorName":instructorName
            }

    
    return data


def encdode (event):
    data = {
            'id': event.id,
            'title': event.title,
            'start': event.start_time,
            'end': event.end_time,

            "extendedProps": {
                "room": event.room,
                "course": event.target_course,
                "group":  event.target_group,
                "instructorName":  event.instructor
            }
            
        }
    return data