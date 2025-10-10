// course object
{
  id: "CS101",
  title: "Intro to CS",
  capacity: 2,
  prerequisites: [] // array of course ids
}

// student object
{
  id: "S1",
  name: "Asha",
  completed: ["CS101"], // course ids already passed
  walletBalance: 1500,  // number
  scholarshipPct: 20    // number 0..100
}

// billing config
{
  feePerCourse: 600, // number
  taxPct: 5          // number 0..100
}

// engine state
{
  enrollments: [ { studentId: "S1", courseId: "CS201" } ],
  waitlists: { CS201: ["S3", "S4"] }, // map courseId -> array of studentIds
  ledger: [ { type: "ENROLL_OK", meta: { studentId: "S1", courseId: "CS201", fee: 630 } } ]
}





// ----- lookups -----
function findStudent(students, studentId) {
  // TODO
}

function findCourse(courses, courseId) {
  // TODO
}

// ----- rules -----
function hasPrerequisites(student, course) {
  // TODO
}

function seatsRemaining(courseId, state, courses) {
  // TODO
}

// ----- waitlist -----
function placeOnWaitlist(state, courseId, studentId) {
  // return new state
  // TODO
}

function promoteFromWaitlist(state, courseId) {
  // return { state, promotedStudentId }
  // TODO
}

// ----- billing -----
function computeTuition(billing, student) {
  // return function (nCourses) => number
  // TODO
}

function processPayment(student, amount) {
  // return { ok, student }
  // TODO
}

// ----- enrollment and logging -----
function enroll(state, studentId, courseId) {
  // return new state
  // TODO
}

function log(state, event) {
  // return new state
  // TODO
}

// ----- main steps -----
function applyRequest(state, students, courses, billing, request) {
  // return { state, students }
  // TODO
}

function runRegistration(state, students, courses, billing, batch) {
  // return { state, students }
  // TODO
}
