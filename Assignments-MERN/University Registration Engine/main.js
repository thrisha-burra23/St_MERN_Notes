/**
 *  task description link 
 *  https://continuous-barber-4ee.notion.site/University-Registration-Engine-27991fc4eaff8018906cf7f8b5a0bb3e
*/


// courses
const COURSES =
    [
        { id: "CS101", title: "Intro to CS", capacity: 4, prerequisites: [] },
        { id: "CS201", title: "Data Structures", capacity: 3, prerequisites: ["CS101"] },
        { id: "CS301", title: "Algorithms", capacity: 2, prerequisites: ["CS201"] },
        { id: "MATH101", title: "Calculus I", capacity: 5, prerequisites: [] },
        { id: "MATH201", title: "Discrete Math", capacity: 2, prerequisites: ["MATH101"] }
    ]

// students
const STUDENTS =
    [
        { id: "S1", name: "Asha", completed: ["CS101"], walletBalance: 1500, scholarshipPct: 20 },
        { id: "S2", name: "Ben", completed: ["CS101", "MATH101"], walletBalance: 800, scholarshipPct: 0 },
        { id: "S3", name: "Clara", completed: [], walletBalance: 3000, scholarshipPct: 50 },
        { id: "S4", name: "Dev", completed: ["MATH101"], walletBalance: 1200, scholarshipPct: 15 },
        { id: "S5", name: "Ella", completed: ["CS101", "CS201"], walletBalance: 2200, scholarshipPct: 30 },
        { id: "S6", name: "Farid", completed: ["MATH101", "MATH201"], walletBalance: 500, scholarshipPct: 0 },
        { id: "S7", name: "Grace", completed: ["CS101"], walletBalance: 1000, scholarshipPct: 10 },
        { id: "S8", name: "Hiro", completed: ["CS101", "MATH101"], walletBalance: 1800, scholarshipPct: 25 }
    ];

// billing config
const BILLING_CONFIG =
{
    feePerCourse: 600,
    taxPct: 5
}

// engine state
const ENGINE_STATE =
{
    enrollments: [
        { studentId: "S1", courseId: "CS201" },
        { studentId: "S2", courseId: "CS201" },
        { studentId: "S5", courseId: "CS301" },
        { studentId: "S4", courseId: "MATH201" },
        { studentId: "S8", courseId: "CS201" }
    ],
    waitlists: {
        CS201: ["S7", "S3"],
        CS301: ["S2", "S6"],
        MATH201: ["S6"]
    },
    ledger: [
        { type: "ENROLL_OK", meta: { studentId: "S1", courseId: "CS201", fee: 630 } },
        { type: "ENROLL_OK", meta: { studentId: "S2", courseId: "CS201", fee: 600 } },
        { type: "ENROLL_OK", meta: { studentId: "S5", courseId: "CS301", fee: 441 } },
        { type: "ENROLL_OK", meta: { studentId: "S4", courseId: "MATH201", fee: 586.5 } },
        { type: "ENROLL_OK", meta: { studentId: "S8", courseId: "CS201", fee: 472.5 } },
        { type: "WAITLISTED", meta: { studentId: "S7", courseId: "CS201" } },
        { type: "WAITLISTED", meta: { studentId: "S3", courseId: "CS201" } },
        { type: "WAITLISTED", meta: { studentId: "S2", courseId: "CS301" } },
        { type: "WAITLISTED", meta: { studentId: "S6", courseId: "CS301" } },
        { type: "WAITLISTED", meta: { studentId: "S6", courseId: "MATH201" } }
    ]
}

//👉 Each fee is calculated as:
//feePerCourse * (1 - scholarshipPct/100) * (1 + taxPct/100).


// ----- lookups -----
function findStudent(students, studentId) {
    let student=null;
    for(s of students){
        if(s.id===studentId){
            student=s;
            console.log(student);
            return student;
        }else{
            return null;
        }
    }
}

function findCourse(courses, courseId) {
    let course=null;
    for(c of courses){
        if(c.id===courseId){
            course=c;
            console.log(course);
            return course;
        }else{
            return null;
        }
    }
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
    let student=findStudent(students,"S1");
    let course=findCourse(courses,"MATH101");

    // return { state, students }
    // TODO
}

function runRegistration(state, students, courses, billing, batch) {
    // return { state, students }
    // TODO
}

