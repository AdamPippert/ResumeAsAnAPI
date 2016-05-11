ResumeAsAnAPI is a node.js based API endpoint for presenting a resume in JSON format.  The format used, jsonresume, is an Open Source development currently being developed, and is the emerging standard for JSON based resume formatting.  The current status of the database containing JSON formatted resumes is at the following URL: http://54.68.92.141:3001/resumes

API functionality:

Viewing all of the resumes in the database (findAll function):
   http://54.68.92.141:3001/resumes/

Viewing a single resume by database ID (findById function):
   http://54.68.92.141:3001/resumes/<_id> 

Adding a new resume to the database (for example, Richard Hendricks from Silicon Valley) using the add function:
   curl -i -X POST -H 'Content-Type: application/json' --data @SiliconValley.json http://localhost:3001/resumes/

Updating an element of the resume (for example, removing the publications data because I haven't published anything) using the update function:
   curl -i -X PUT -H 'Content-Type: application/json' -d '{"publications": [""]}' http://localhost:3001/resumes/<_id>

Deleting Richard's resume from the database, because he's a fictional character (using his resume entry's database ID):
   curl -i -X DELETE http://localhost:3001/resumes/<_id>