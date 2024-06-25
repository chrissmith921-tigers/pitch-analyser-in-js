# PitchAnalyst

There are multiple entry points to this api - to run:

Command to start server: node app.js

API entry points:
GET: http://localhost:3000/api/pitches - Uses sample pitch list (inline) to return details about all the pitches
GET: http://localhost:3000/api/pitch-counts - Uses the sample pitch list to provide details grouped by pitch type
GET: http://localhost:3000/api/strike-counts - Gets the strike counts and group by pitch count from the given pitch type.
GET: http://localhost:3000/api/strike-list-by-pitchtype?pitchType=XX - Gets the strike list based on the given pitchType (Accepted: FB, CT, SL, CB)
GET: http://localhost:3000/api/percentage-list-by-pitchtype?pitchType=XX - Gets the strike percentage based on the given pitchType (Accepted: FB, CT, SL, CB)

POST: http://localhost:3000/api/percentage-strikes-by-pitchtype/XX - Accepts a payload of type [[string, double, double],...] and returns the % strikes for the given pitchtype (replace XX in the uri)

Also attached is REST-project-soapui.xml which allows you to test the POST request above.