import { useState } from "react";
import { motion } from "framer-motion";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import Container from "./Container";
import { BRAND_DARK, BRAND_BLUE } from "../lib/brand";

const steps = [
  "Personal Information",
  "Educational Background",
  "Company Information",
  "Alumni Program",
];

export default function Alumni() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    center_id: "",
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    gender: "",
    course: "",
    address: "",
    civil_status: "",
    contact_number: "",
    year_graduated: "",
    birthdate: "",
    awards_received: "",
    failing_grades: "",
    drop_subjects: "",
    working_while_studying: "",
    engaged_in: "",
    promote_after_grad: "",
    first_employed: "",
    never_employed: "",
    first_job: "",
    first_stablishment: "",
    how_you_apply: "",
    favorable_factors: "",
    how_long_employer: "",
    were_you_promoted: "",
    promoted_more_than_once: "",
    inline_job: "",
    knowledge_obtained: "",
    why_did_you_leave: "",
    current_position: "",
    company_name: "",
    monthly_salary: "",
    not_employed: "",
    useful_skills: [],
  });

  const handleNext = () => {
    if (!isStepValid()) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you for submitting your alumni information!");
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0: // Personal Info
        return (
          formData.firstname.trim() &&
          formData.lastname.trim() &&
          formData.email.trim() &&
          formData.contact_number.trim() &&
          formData.birthdate.trim() &&
          formData.gender.trim() &&
          formData.civil_status.trim()
        );

      case 1: // Educational Background
        return (
          formData.course.trim() &&
          formData.year_graduated.trim() &&
          formData.center_id.trim() &&
          formData.awards_received.trim() &&
          formData.failing_grades.trim() &&
          formData.drop_subjects.trim()
        );

      case 2: // Company Info
        return (
          formData.working_while_studying.trim() &&
          (formData.working_while_studying === "No" ||
            formData.engaged_in.trim()) &&
          formData.promote_after_grad.trim() &&
          formData.first_employed.trim() &&
          formData.never_employed.trim() &&
          formData.first_job.trim() &&
          formData.first_stablishment.trim() &&
          formData.how_you_apply.trim() &&
          formData.favorable_factors.trim() &&
          formData.how_long_employer.trim() &&
          formData.were_you_promoted.trim() &&
          formData.promoted_more_than_once.trim() &&
          formData.inline_job.trim() &&
          formData.knowledge_obtained.trim() &&
          formData.why_did_you_leave.trim() &&
          formData.current_position.trim() &&
          formData.company_name.trim() &&
          formData.monthly_salary.trim() &&
          formData.not_employed.trim()
        );

      case 3: // Feedback
        return (
          formData.skills_acquired.trim() &&
          formData.career_services.trim() &&
          formData.internship_opportunities.trim() &&
          formData.quality_teaching.trim() &&
          formData.relevance_curriculum.trim() &&
          formData.recommend_degree.trim() &&
          formData.interested_participating.trim() &&
          formData.alumni_mentoring.trim()
        );
      // return formData.rating > 0; // optional: require rating or feedback
      // default:
      //   return true;
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0: //personal info
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <TextField
                fullWidth
                label="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <TextField
                fullWidth
                label="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            {/* Middle Name */}
            <div>
              <TextField
                fullWidth
                label="Middle Name"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                margin="normal"
              />
            </div>

            {/* Email */}
            <div>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            {/* Birthdate */}
            <div>
              <TextField
                fullWidth
                type="date"
                label="Birthdate"
                name="birthdate"
                InputLabelProps={{ shrink: true }}
                value={formData.birthdate}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Civil Status */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Civil Status</InputLabel>
                <Select
                  name="civil_status"
                  value={formData.civil_status}
                  label="Civil Status"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Civil Status</MenuItem>
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Divorced">Divorced</MenuItem>
                  <MenuItem value="Widowed">Widowed</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        );

      case 1: //educational background
        return (
          <Grid spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Course</InputLabel>
                  <Select
                    name="course"
                    value={formData.course}
                    label="Course"
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="">Select Course</MenuItem>
                    <MenuItem value="BSIT">BSIT</MenuItem>
                    <MenuItem value="BSCS">BSCS</MenuItem>
                    <MenuItem value="BSIS">BSIS</MenuItem>
                    <MenuItem value="BSBA">BSBA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Year Graduated</InputLabel>
                <Select
                  name="year_graduated"
                  value={formData.year_graduated}
                  onChange={handleChange}
                  label="Year Graduated"
                >
                  <MenuItem value="">Select Year</MenuItem>
                  {[...Array(2025 - 2000)].map((_, i) => {
                    const year = 2000 + i;
                    return (
                      <MenuItem key={year} value={year.toString()}>
                        {year}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Informatics Branch</InputLabel>
                <Select
                  name="center_id"
                  value={formData.center_id}
                  label="Informatics Branch"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Informatics Branch</MenuItem>
                  <MenuItem value="1">Manila</MenuItem>
                  <MenuItem value="2">Northgate</MenuItem>
                  <MenuItem value="3">Cavite</MenuItem>
                  <MenuItem value="4">Baguio</MenuItem>
                  <MenuItem value="5">Cebu</MenuItem>
                  <MenuItem value="6">Cagayan De Oro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Highest Academic Honors/Awards Received in College
                </InputLabel>
                <Select
                  name="awards_received"
                  value={formData.awards_received}
                  label="Awards Received"
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Awards</MenuItem>
                  <MenuItem value="1">Summa Cum Laude</MenuItem>
                  <MenuItem value="1">Magna Cum Laude</MenuItem>
                  <MenuItem value="2">Cum Laude</MenuItem>
                  <MenuItem value="3">With Honors</MenuItem>
                  <MenuItem value="4">Dean’s Lister</MenuItem>
                  <MenuItem value="5">
                    Did not graduate with honors nor was a Dean's
                    lister/academic scholar while studying
                  </MenuItem>
                  <MenuItem value="6">None</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Obtain a failing grade(s)? </InputLabel>
                  <Select
                    name="failing_grades"
                    value={formData.failing_grades}
                    label="Failing Grades"
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="">Select Yes or No</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel>Drop a subject(s)? </InputLabel>
                  <Select
                    name="drop_subjects"
                    value={formData.drop_subjects}
                    label="Drop Subjects"
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    <MenuItem value="">Select Yes or No</MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        );

      case 2: // company info
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Were you working while studying? */}
            <div className="md:col-span-2">
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Were you working while studying at Informatics?
                </InputLabel>
                <Select
                  name="working_while_studying"
                  value={formData.working_while_studying}
                  label="Were you working while studying at Informatics?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* If YES, what work were you engaged in? */}
            {formData.working_while_studying === "Yes" && (
              <div className="md:col-span-2">
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  label="If YES, what work were you engaged in?"
                  name="engaged_in"
                  value={formData.engaged_in}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Were you promoted after graduation? */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Were you promoted after graduation?</InputLabel>
                <Select
                  name="promote_after_grad"
                  value={formData.promote_after_grad}
                  label="Were you promoted after graduation?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* When were you first employed after graduation? */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="When were you first employed after graduation?"
                name="first_employed"
                value={formData.first_employed}
                onChange={handleChange}
              />
            </div>

            {/* If never employed, reason why */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="If you were never employed, reason why?"
                name="never_employed"
                value={formData.never_employed}
                onChange={handleChange}
              />
            </div>

            {/* First job */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="What was your first job/position when first hired?"
                name="first_job"
                value={formData.first_job}
                onChange={handleChange}
              />
            </div>

            {/* First establishment */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="Name of your first establishment"
                name="first_stablishment"
                value={formData.first_stablishment}
                onChange={handleChange}
              />
            </div>

            {/* How did you apply there? */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="How did you apply there?"
                name="how_you_apply"
                value={formData.how_you_apply}
                onChange={handleChange}
              />
            </div>

            {/* Favorable factors */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="Favorable factors that made you accepted"
                name="favorable_factors"
                value={formData.favorable_factors}
                onChange={handleChange}
              />
            </div>

            {/* How long did you stay */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="How long did you stay with your first employer?"
                name="how_long_employer"
                value={formData.how_long_employer}
                onChange={handleChange}
              />
            </div>

            {/* Were you promoted in your first employment? */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Were you promoted in your first employment?
                </InputLabel>
                <Select
                  name="were_you_promoted"
                  value={formData.were_you_promoted}
                  label="Were you promoted in your first employment?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* If yes, when were you first promoted */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="If yes, when were you first promoted?"
                name="promoted_more_than_once"
                value={formData.promoted_more_than_once}
                onChange={handleChange}
              />
            </div>

            {/* Is current job related to course */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Is your current job related to your course?
                </InputLabel>
                <Select
                  name="inline_job"
                  value={formData.inline_job}
                  label="Is your current job related to your course?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Knowledge obtained usefulness */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="How useful are your skills obtained from Informatics?"
                name="knowledge_obtained"
                value={formData.knowledge_obtained}
                onChange={handleChange}
              />
            </div>

            {/* Why did you leave */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="If you left your first employer, why?"
                name="why_did_you_leave"
                value={formData.why_did_you_leave}
                onChange={handleChange}
              />
            </div>

            {/* Current position */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="Current Position"
                name="current_position"
                value={formData.current_position}
                onChange={handleChange}
              />
            </div>

            {/* Company name */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="Company Name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
              />
            </div>

            {/* Monthly salary */}
            <div>
              <TextField
                fullWidth
                margin="normal"
                required
                label="Current Monthly Salary"
                name="monthly_salary"
                value={formData.monthly_salary}
                onChange={handleChange}
              />
            </div>

            {/* If not employed now, why */}
            <div className="md:col-span-2">
              <TextField
                fullWidth
                margin="normal"
                required
                label="If not employed now, why?"
                name="not_employed"
                value={formData.not_employed}
                onChange={handleChange}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills acquired */}
            <div className="md:col-span-2">
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Which skills acquired during your studies have been most
                  useful in your career?
                </InputLabel>
                <Select
                  multiple
                  name="skills_acquired"
                  value={formData.skills_acquired || []}
                  label="Which skills acquired during your studies have been most useful in your career?"
                  onChange={(e) => {
                    const {
                      target: { value },
                    } = e;
                    setFormData({
                      ...formData,
                      skills_acquired:
                        typeof value === "string" ? value.split(",") : value,
                    });
                  }}
                  renderValue={(selected) => selected.join(", ")}
                >
                  <MenuItem value="Communication">Communication</MenuItem>
                  <MenuItem value="Teamwork">Teamwork</MenuItem>
                  <MenuItem value="Problem-solving">Problem-solving</MenuItem>
                  <MenuItem value="Technical skills">Technical skills</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Career Services */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Availability of Career Services</InputLabel>
                <Select
                  name="career_services"
                  value={formData.career_services}
                  label="Availability of Career Services"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    Rate from 1 = Very Dissatisfied to 5 = Very Satisfied
                  </MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Internship Opportunities */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Internship Opportunity</InputLabel>
                <Select
                  name="internship_opportunities"
                  value={formData.internship_opportunities}
                  label="Internship Opportunity"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    Rate from 1 = Very Dissatisfied to 5 = Very Satisfied
                  </MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Quality of teaching */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Quality of Teaching</InputLabel>
                <Select
                  name="quality_of_teaching"
                  value={formData.quality_of_teaching}
                  label="Quality of Teaching"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    Rate from 1 = Very Dissatisfied to 5 = Very Satisfied
                  </MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Relevance Curriculum */}
            <div>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Relevance of Curriculum to industry needs
                </InputLabel>
                <Select
                  name="relevance_curriculum"
                  value={formData.relevance_curriculum}
                  label="Relevance of Curriculum to industry needs"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    Rate from 1 = Very Dissatisfied to 5 = Very Satisfied
                  </MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Would you recommend your degree program to others? */}
            <div className="md:col-span-2">
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Would you recommend this degree program to others?
                </InputLabel>
                <Select
                  name="recommend_degree"
                  value={formData.recommend_degree}
                  label="Would you recommend this degree program to others?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Are you interested in participating in alumni activities? */}
            <div className="md:col-span-2">
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Are you interested in participating in alumni activities?
                </InputLabel>
                <Select
                  name="interested_participating"
                  value={formData.interested_participating}
                  label="Are you interested in participating in alumni activities?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Would you be open to mentoring current students? */}
            <div className="md:col-span-2">
              <FormControl fullWidth margin="normal" required>
                <InputLabel>
                  Would you be open to mentoring current students?
                </InputLabel>
                <Select
                  name="alumni_mentoring"
                  value={formData.alumni_mentoring}
                  label="Would you be open to mentoring current students?"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">Select Yes or No</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-x-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md ring-1 ring-black/5"
        >
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: BRAND_DARK }}
          >
            Alumni Information Form
          </h2>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit}>
            <div className="mt-8">{renderStepContent(activeStep)}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: BRAND_BLUE,
                    "&:hover": { backgroundColor: "#0056b3" },
                  }}
                >
                  Submit
                </Button>
              ) : (
                // <Button
                //   variant="contained"
                //   onClick={handleNext}
                //   disabled={!isStepValid()} // disable if validation fails
                // >
                //   Next
                // </Button>

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    backgroundColor: BRAND_BLUE,
                    "&:hover": { backgroundColor: "#0056b3" },
                  }}
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
