import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "PERSONAL INFORMATION",
  "EDUCATION & OCCUPATION",
  "ADDITIONAL INFORMATION",
];
const Assessment = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [category, setCategory] = React.useState("Skilled Worker Assistance");
  const isStepOptional = (step) => {
    return null; //step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const registerUser = async (event) => {
    event.preventDefault();
    handleNext();
  };
  return (
    <div className="container-fluid assessement-container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-3">
            <div className=" pt-5 px-5">
              <div className="section-title">
                <h1>
                  Do you need <span>assistance </span>?
                </h1>
                <p className="mt-5">
                  We draw your attention to the fact that currently there are
                  more than 80 different Canadian immigration programs. Our
                  experts, as accurately as possible, will assess your chances
                  of participating: in the programs of general entry of the
                  provincial, business immigration, family reunification. The
                  personal information you provide is protected. We undertake to
                  use the information received from you solely for the purpose
                  of assessing your potential for immigration to Canada.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="services-cards-container">
                <div className="row">
                  <div className="col-md-4">
                    <a onClick={() => setCategory("Skilled Worker Assistance")}>
                      <div
                        className={
                          "card services-card px-4 " +
                          (category == "Skilled Worker Assistance"
                            ? "selected"
                            : "")
                        }
                      >
                        <div className="row">
                          <div className="service-card-content">
                            <div className="texts  text-center">
                              <h5>Skilled Worker Assistance</h5>
                              <p>
                                Find out if you are eligible to immigrate to
                                Canada through one of the country's over 100
                                skilled worker options.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a
                      onClick={() =>
                        setCategory("Family Sponsorship Assistance")
                      }
                    >
                      <div
                        className={
                          "card services-card px-4 " +
                          (category == "Family Sponsorship Assistance"
                            ? "selected"
                            : "")
                        }
                      >
                        <div className="row">
                          <div className="service-card-content">
                            <div className="texts  text-center">
                              <h5>Family Sponsorship Assistance</h5>
                              <p>
                                See if you are eligible to sponsor a loved one,
                                or be sponsored by a Canadian citizen or
                                permanent resident.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a
                      onClick={() => setCategory("Other Immigration Enquiries")}
                    >
                      <div
                        className={
                          "card services-card px-4 " +
                          (category == "Other Immigration Enquiries"
                            ? "selected"
                            : "")
                        }
                      >
                        <div className="row">
                          <div className="service-card-content">
                            <div className="texts  text-center">
                              <h5>Other Immigration Enquiries</h5>
                              <p>
                                Contact us about work permits, study permits,
                                business immigration, citizenship, and
                                inadmissibility.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-12 pt-5 px-5 mb-5">
                    <Box sx={{ width: "100%" }}>
                      <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => {
                          const stepProps = {};
                          const labelProps = {};
                          if (isStepOptional(index)) {
                            labelProps.optional = (
                              <Typography variant="caption">
                                Optional
                              </Typography>
                            );
                          }
                          if (isStepSkipped(index)) {
                            stepProps.completed = false;
                          }
                          return (
                            <Step key={label} {...stepProps}>
                              <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                          );
                        })}
                      </Stepper>
                      {activeStep === steps.length ? (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                          </Box>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div className="container">
                            <div className="card p-5 border-0">
                              <form onSubmit={registerUser} className="row g-3">
                                {activeStep === 0 && (
                                  <>
                                    <div className="col-md-2">
                                      <label
                                        htmlFor="age"
                                        className="form-label"
                                      >
                                        Age*
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="age"
                                        placeholder="Age"
                                      />
                                    </div>
                                    <div className="col-md-5">
                                      <label
                                        htmlFor="CountryOfResidence"
                                        className="form-label"
                                      >
                                        Country of Residence*
                                      </label>
                                      <select
                                        className="form-select"
                                        id="CountryOfResidence"
                                      >
                                        <option value="tunisia">tunisia</option>
                                        <option value="france">france</option>
                                        <option value="algeria">algeria</option>
                                        <option value="morocco">morocco</option>
                                      </select>
                                    </div>
                                    <div className="col-md-5">
                                      <label
                                        htmlFor="CountryOfCitizenship"
                                        className="form-label"
                                      >
                                        Country of Citizenship*
                                      </label>
                                      <select
                                        className="form-select"
                                        id="CountryOfCitizenship"
                                      >
                                        <option value="tunisia">tunisia</option>
                                        <option value="france">france</option>
                                        <option value="algeria">algeria</option>
                                        <option value="morocco">morocco</option>
                                      </select>
                                    </div>
                                    <div className="col-md-8">
                                      <label
                                        htmlFor="inputAddress"
                                        className="form-label"
                                      >
                                        Marital Status*
                                      </label>
                                      <br />
                                      <div className="radio-group-wrapper">
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-1"
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-2"
                                        />
                                        <input
                                          type="radio"
                                          name="select"
                                          id="option-3"
                                        />
                                        <label
                                          htmlFor="option-1"
                                          className="option option-1"
                                        >
                                          <div className="dot"></div>
                                          <span>Single</span>
                                        </label>
                                        <label
                                          htmlFor="option-2"
                                          className="option option-2"
                                        >
                                          <div className="dot"></div>
                                          <span>Married</span>
                                        </label>
                                        <label
                                          htmlFor="option-3"
                                          className="option option-3"
                                        >
                                          <div className="dot"></div>
                                          <span>Common-Law Partner</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <label
                                        htmlFor="inputAddress"
                                        className="form-label"
                                      >
                                        Do you have any children under the age
                                        of 22?*
                                      </label>
                                      <select
                                        className="form-select"
                                        name="children"
                                        id="children-input"
                                      >
                                        <option value="yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                    </div>
                                    <div className="col-12">
                                      <label
                                        htmlFor="inputAddress"
                                        className="form-label"
                                      >
                                        Your Language Skills*
                                      </label>
                                      <table className="w-100 text-center">
                                        <tr>
                                          <td></td>
                                          <td>Writing</td>
                                          <td>Reading</td>
                                          <td>Speaking</td>
                                          <td>Listening</td>
                                        </tr>
                                        <tr>
                                          <td>French</td>
                                          <td>
                                            <select
                                              name="writing-fr"
                                              id="writing-fr"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>

                                          <td>
                                            <select
                                              name="reading-fr"
                                              id="reading-fr"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            <select
                                              name="speaking-fr"
                                              id="speaking-fr"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            <select
                                              name="listening-fr"
                                              id="listening-fr"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>English</td>
                                          <td>
                                            <select
                                              name="writing-en"
                                              id="writing-en"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            <select
                                              name="reading-en"
                                              id="reading-en"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            {" "}
                                            <select
                                              name="speaking-en"
                                              id="speaking-en"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            {" "}
                                            <select
                                              name="listening-en"
                                              id="listening-en"
                                              className="form-select"
                                            >
                                              <option value="expert">
                                                Expert
                                              </option>
                                              <option value="very-good">
                                                Very good
                                              </option>
                                              <option value="good">Good</option>
                                              <option value="competent">
                                                Competent
                                              </option>
                                              <option value="modest">
                                                Modest
                                              </option>
                                              <option value="limited">
                                                Limited
                                              </option>
                                              <option value="not-at-all">
                                                Not at all
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                    <div className="col-12">
                                      <label
                                        htmlFor="inputCity"
                                        className="form-label"
                                      >
                                        Preferred Destination in Canada
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputFirstName"
                                        className="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        name="FirstName"
                                        id="inputFirstName"
                                        className="form-control"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputLastName"
                                        className="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        name="LastName"
                                        id="inputLastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputEmail"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="email@example.com"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputTelephone"
                                        className="form-label"
                                      >
                                        Telephone
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputTelephone"
                                        placeholder="Enter your phone number including country code"
                                      />
                                    </div>
                                  </>
                                )}
                                {activeStep === 1 && (
                                  <>
                                    <div className="col-12">
                                      <label
                                        htmlFor="inputCity"
                                        className="form-label"
                                      >
                                        Preferred Destination in Canada
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputFirstName"
                                        className="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        name="FirstName"
                                        id="inputFirstName"
                                        className="form-control"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputLastName"
                                        className="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        name="LastName"
                                        id="inputLastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputEmail"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="email@example.com"
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <label
                                        htmlFor="inputTelephone"
                                        className="form-label"
                                      >
                                        Telephone
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="inputTelephone"
                                        placeholder="Enter your phone number including country code"
                                      />
                                    </div>
                                  </>
                                )}
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    pt: 2,
                                  }}
                                >
                                  <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                  >
                                    Back
                                  </Button>
                                  <Box sx={{ flex: "1 1 auto" }} />
                                  {isStepOptional(activeStep) && (
                                    <Button
                                      color="inherit"
                                      onClick={handleSkip}
                                      sx={{ mr: 1 }}
                                    >
                                      Skip
                                    </Button>
                                  )}

                                  <button
                                    className="btn btn-light text-primary"
                                    type="submit"
                                  >
                                    {activeStep === steps.length - 1
                                      ? "Finish"
                                      : "Next"}
                                  </button>
                                </Box>
                              </form>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
